package com.wv.mfaraji.notesapp.server.users;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
class UserNotFoundException extends RuntimeException {

	public UserNotFoundException(Long userId) {
		super("could not find user '" + userId + "'.");
	}
}
