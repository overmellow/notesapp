package com.wv.mfaraji.notesapp.server.auth;

import java.util.Date;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import com.wv.mfaraji.notesapp.server.users.User;
import com.wv.mfaraji.notesapp.server.users.UsersService;

@CrossOrigin
//@CrossOrigin(origins = "http://192.168.31.129:4200")
@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	private UsersService userService;
	
	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public User registerUser(@RequestBody User user) {
		return userService.addUser(user);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/login")
	public UserWithToken login(@RequestBody User login) throws ServletException {
		String jwtToken = "";

	    if (login.getUsername() == null || login.getPassword() == null) {
	        throw new ServletException("Please fill in username and password");
	    }

	    String username = login.getUsername();
	    String password = login.getPassword();

	    User user = userService.findByUsername(username);

	    if (user == null) {
	        throw new ServletException("User email not found.");
	    }

	    String pwd = user.getPassword();

	    if (!password.equals(pwd)) {
	        throw new ServletException("Invalid login. Please check your name and password.");
	    }

	    jwtToken = Jwts.builder().setSubject(username).claim("roles", "user").setIssuedAt(new Date())
	            .signWith(SignatureAlgorithm.HS256, "secretkey").compact();
	    	    
	    return new UserWithToken(jwtToken, user);
	    //return jwtToken;
	}
}
