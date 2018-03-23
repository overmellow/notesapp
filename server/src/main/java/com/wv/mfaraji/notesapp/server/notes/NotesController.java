package com.wv.mfaraji.notesapp.server.notes;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/{userId}")
public class NotesController {
	
	@Autowired
	private NotesService notesService;
	
	@RequestMapping("/notes")
	public List<Note> getNotes(@PathVariable Long userId) {
		return this.notesService.getNotesByUserId(userId);
	}

	@RequestMapping("/notes/{id}")
	public Optional<Note> getNote(@PathVariable Long id) {
		return this.notesService.getNote(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/notes")
	public void addNote(@RequestBody Note note) {
		this.notesService.addNote(note);		
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/notes/{id}")
	public void updateNote(@RequestBody Note note, @PathVariable String id) {
		this.notesService.updateNote(note);		
	}

	@RequestMapping(method=RequestMethod.DELETE, value="/notes/{id}")
	public void deleteNote(@PathVariable Long id) {
		this.notesService.removeNote(id);		
	}
	
}
