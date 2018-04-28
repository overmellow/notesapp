package com.wv.mfaraji.notesapp.server.users;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

import javax.annotation.security.RolesAllowed;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


//@Secured("ROLE_ADMIN")
@CrossOrigin
//@CrossOrigin(origins = "http://192.168.31.129:4200")
@RestController
@RequestMapping("api/users")
public class UsersController {
	
	@Autowired
	private UsersService usersService;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;


	@RequestMapping("")
//	@RolesAllowed({"ROLE_ADMIN"})
//	@PreAuthorize("hasAnyAuthority('ROLE_ADMIN')")
//  @Secured({"ROLE_ADMIN"})
//	@PreAuthorize(value = "")
	public List<User> getUsers() {
		return this.usersService.getAllUsers();
	}
	
	@RequestMapping("/{id}")
	public User getUser(@PathVariable Long id) {
		return this.usersService.getUser(id);//.orElseThrow(() -> new UserNotFoundException(id));
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public void addUser(@RequestBody User user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		this.usersService.addUser(user);		
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/{id}")
	public void updateUser(@RequestBody User user, @PathVariable Long id) {
		this.usersService.updateUser(user);		
	}

	@RequestMapping(method=RequestMethod.DELETE, value="/{id}")
	public void deleteUser(@PathVariable Long id) {
		this.usersService.removeUser(id);		
	}
}
