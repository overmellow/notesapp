package com.wv.mfaraji.notesapp.server.auth;

import com.wv.mfaraji.notesapp.server.users.User;

public class UserWithToken extends User {
	private String jwtToken;
	private User user;
	
	public UserWithToken(String jwtToken, User user) {
		this.jwtToken = jwtToken;
		this.user = user;
	}
	
	public String getJwtToken() {
		return jwtToken;
	}
	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}	 
}
