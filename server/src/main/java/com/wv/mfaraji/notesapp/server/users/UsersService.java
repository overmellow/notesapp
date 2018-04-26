package com.wv.mfaraji.notesapp.server.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {
	
	@Autowired
	private UserRepositoty userRepositoty;
	
	public List<User> getAllUsers() {
		return this.userRepositoty.findAll();				
	}
	
	public User getUser(Long id) {
		return this.userRepositoty.findById(id).orElse(new User());
	}
	
	public User addUser(User user) {
		return this.userRepositoty.save(user);
	}
	
	public User updateUser(User user) {
		return this.userRepositoty.save(user);
	}
	
	public void removeUser(Long id) {
		this.userRepositoty.deleteById(id);
	}
	
	public User findByUsername(String username){
		return this.userRepositoty.findByUsername(username);
	}
}
