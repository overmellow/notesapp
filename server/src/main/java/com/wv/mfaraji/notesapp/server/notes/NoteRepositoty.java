package com.wv.mfaraji.notesapp.server.notes;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepositoty extends JpaRepository<Note, Long>{
	
	public List<Note> findByUserId(Long userId);
}
