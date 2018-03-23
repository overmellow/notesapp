package com.wv.mfaraji.notesapp.server.notes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NotesService {
	
	@Autowired
	private NoteRepositoty noteRepositoty;
	
	public List<Note> getNotesByUserId(Long id) {
		return this.noteRepositoty.findByUserId(id);				
	}
	
	public Optional<Note> getNote(long id) {
		return this.noteRepositoty.findById(id);
	}
	
	public Note addNote(Note note) {
		return this.noteRepositoty.save(note);
	}
	
	public Note updateNote(Note note) {
		return this.noteRepositoty.save(note);
	}
	
	public void removeNote(Long id) {
		this.noteRepositoty.deleteById(id);
	}
}
