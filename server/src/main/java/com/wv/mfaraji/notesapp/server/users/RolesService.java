package com.wv.mfaraji.notesapp.server.users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RolesService {
	
	@Autowired
	private RoleRepository roleRepositoty;
	
	public List<Role> getAllRoles() {
		return (List<Role>) this.roleRepositoty.findAll();				
	}
	
	public Role getRole(Long id) {
		return this.roleRepositoty.findById(id).orElse(new Role());
	}
	
	public Role addRole(Role role) {
		return this.roleRepositoty.save(role);
	}
	
	public Role updateRole(Role role) {
		return this.roleRepositoty.save(role);
	}
	
	public void removeRole(Long id) {
		this.roleRepositoty.deleteById(id);
	}
}
