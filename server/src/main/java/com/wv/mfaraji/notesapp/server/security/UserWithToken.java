package com.wv.mfaraji.notesapp.server.security;

import com.wv.mfaraji.notesapp.server.users.User;

public class UserWithToken extends User {
	private String jwtToken;
	
	public UserWithToken(User user, String jwtToken ) {
		setId(user.getId());
		setUsername(user.getUsername());
		this.jwtToken = jwtToken;		
	}
	
	public String getJwtToken() {
		return jwtToken;
	}
	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}
}
