package com.wv.mfaraji.notesapp.server.notes;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.wv.mfaraji.notesapp.server.users.User;

@Entity
public class Note {
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String content;
	private String image;
	
	@JsonIgnore
    @ManyToOne
    private User user;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	public Note() {}
	
	public Note(String content, User user) {
		this.content = content;
		this.user = user;
	}
	
	public Note(String content, String image, User user) {
		this.content = content;
		this.image = image;
		this.user = user;
	}
}
