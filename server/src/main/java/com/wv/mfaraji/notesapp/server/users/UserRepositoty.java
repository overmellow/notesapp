package com.wv.mfaraji.notesapp.server.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepositoty extends JpaRepository<User, Long>{
	
}
