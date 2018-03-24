package com.wv.mfaraji.notesapp.server.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UsersService {
	
	@Autowired
	private UserRepositoty userRepositoty;
	
	public List<User> getAllUsers() {
		return this.userRepositoty.findAll();				
	}
	
	public Optional<User> getUser(long id) {
		return this.userRepositoty.findById(id);
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
}
