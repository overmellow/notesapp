package com.wv.mfaraji.notesapp.server.files;

import java.io.IOException;
import java.io.InputStream;
import org.springframework.core.io.ResourceLoader;

import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import org.springframework.util.StreamUtils;

@CrossOrigin(origins = "http://192.168.31.129:4200")
@RestController
@RequestMapping(value ="api/files")
public class FileController {
	
	@Autowired
	private StorageService storageService;
	
	@Autowired
	private ResourceLoader resourceLoader;
    
	@RequestMapping(method=RequestMethod.POST)
    public File handleFileUpload(@RequestParam("file") MultipartFile file) {
		String filename = storageService.store(file);
		return new File(filename);
    }
	
	@GetMapping(value = "/image", produces = MediaType.IMAGE_JPEG_VALUE)
	public @ResponseBody ResponseEntity<byte[]> getText(@RequestParam String filename, HttpServletResponse response) throws IOException {
		Resource imgFile = this.resourceLoader.getResource("file:uploads/" + filename);
		//Resource imgFile = new ClassPathResource("uploads/" + filename);
        byte[] bytes = StreamUtils.copyToByteArray(imgFile.getInputStream());
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(bytes);        
	}
}
