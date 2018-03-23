package com.wv.mfaraji.notesapp.server;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.wv.mfaraji.notesapp.server.notes.Note;
import com.wv.mfaraji.notesapp.server.notes.NoteRepositoty;
import com.wv.mfaraji.notesapp.server.notes.NotesService;
import com.wv.mfaraji.notesapp.server.users.User;
import com.wv.mfaraji.notesapp.server.users.UsersService;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}
	
	@Bean
	CommandLineRunner init(UsersService usersService, NotesService notesService) throws Exception{
		return (args) -> {
			User mori = new User("mori", "2000");
			User john = new User("john", "2000");
			
			usersService.addUser(mori);
			usersService.addUser(john);
			
			notesService.addNote(new Note("help", mori));
			notesService.addNote(new Note("shopping", mori));
			notesService.addNote(new Note("walk", mori));
			
			notesService.addNote(new Note("buy home", john));
			notesService.addNote(new Note("polish", john));
		};
	}
}
