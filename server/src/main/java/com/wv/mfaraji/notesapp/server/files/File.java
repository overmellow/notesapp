package com.wv.mfaraji.notesapp.server.files;

public class File {
	private String filename;

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}
	
	public File(String filename) {
		this.filename = filename;
	}
}
