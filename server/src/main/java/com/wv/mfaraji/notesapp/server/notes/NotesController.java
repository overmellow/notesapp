package com.wv.mfaraji.notesapp.server.notes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.RestController;

import com.wv.mfaraji.notesapp.server.users.User;

@CrossOrigin(origins = "http://192.168.31.129:4200")
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
	public Note getNote(@PathVariable Long id) {
		return this.notesService.getNote(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/notes")
	public void addNote(@PathVariable Long userId, @RequestBody Note note ) {
		note.setUser(new User(userId));
		this.notesService.addNote(note);		
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/notes/{id}")
	public void updateNote(@PathVariable Long userId, @RequestBody Note note, @PathVariable Long id) {
		note.setUser(new User(userId));
		this.notesService.updateNote(note);		
	}

	@RequestMapping(method=RequestMethod.DELETE, value="/notes/{id}")
	public void deleteNote(@PathVariable Long id) {
		this.notesService.removeNote(id);		
	}
	
}
