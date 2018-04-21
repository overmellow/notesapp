package com.wv.mfaraji.notesapp.server.misc;

import java.net.InetAddress;
import java.net.UnknownHostException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
//@CrossOrigin(origins = "http://192.168.31.129:4200")
@RestController
@RequestMapping("misc")
public class MiscController {

	@GetMapping
	public String getHostUrl(HttpServletRequest request) {
		return request.getRequestURL().toString();
	}
	
	@GetMapping("/host")
	public void getHostName() {
		InetAddress ip;
        String hostname;
        
        try {
            ip = InetAddress.getLocalHost();
            hostname = ip.getHostName();
            System.out.println("Your current IP address : " + ip.getHostAddress());
            System.out.println("Your current Hostname : " + hostname);
 
        } catch (UnknownHostException e) {
 
            e.printStackTrace();
        }
	}
}
