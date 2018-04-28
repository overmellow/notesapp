package com.wv.mfaraji.notesapp.server;

import java.util.Arrays;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.wv.mfaraji.notesapp.server.notes.Note;
import com.wv.mfaraji.notesapp.server.notes.NotesService;
import com.wv.mfaraji.notesapp.server.security.JwtFilter;
import com.wv.mfaraji.notesapp.server.users.Role;
import com.wv.mfaraji.notesapp.server.users.RoleRepository;
import com.wv.mfaraji.notesapp.server.users.User;
import com.wv.mfaraji.notesapp.server.users.UsersService;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.wv.mfaraji.notesapp.server.files.StorageService;

@SpringBootApplication
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class ServerApplication {

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}
	
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
	
	@Bean
	CommandLineRunner init(UsersService usersService, RoleRepository roleRepository, NotesService notesService, StorageService storageService) throws Exception{
		return (args) -> {
			User mori = new User("mori", this.bCryptPasswordEncoder.encode("2000"));
			User john = new User("john", this.bCryptPasswordEncoder.encode("1000"));
			
			Role user = new Role("USER");			
			Role admin = new Role("ADMIN");
			
			
			mori.setRoles(new HashSet<Role>(Arrays.asList(user, admin)));
			john.setRoles(new HashSet<Role>(Arrays.asList(user)));
//			john.addRole(admin);
			
			roleRepository.save(user);
			roleRepository.save(admin);
				
			usersService.addUser(mori);
			usersService.addUser(john);
			
			notesService.addNote(new Note("help", "test.jpeg", mori));
			notesService.addNote(new Note("shopping", "test.jpeg", mori));
			notesService.addNote(new Note("walk", "test.jpeg", mori));
			notesService.addNote(new Note("iay", "test.jpeg", mori));
			
			notesService.addNote(new Note("buy home", "test.jpeg", john));
			notesService.addNote(new Note("polish", "test.jpeg", john));
			
			storageService.init();
		};
	}
	
//	@Bean
//	public FilterRegistrationBean jwtFilter() {
//		final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
//		registrationBean.setFilter(new JwtFilter());
//		registrationBean.addUrlPatterns("/api/*");
//
//		return registrationBean;
//	}
	
//	@Bean
//	public WebMvcConfigurer corsConfigurer() {
//	    return new WebMvcConfigurer() {
//	        @Override
//	        public void addCorsMappings(CorsRegistry registry) {
//	        	System.out.println("hello");
//	            registry.addMapping("/**").allowedOrigins("http://127.0.0.1:4200/")
//	            	.allowedMethods("*")
//	            	.allowedHeaders("*")
//	            	.allowCredentials(true);	         
//	        }
//	    };
//	}
	
//	@Configuration
//	@EnableWebMvc
//	public class MvcConfig implements WebMvcConfigurer {
//	    @Override
//	    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//	        registry
//	          .addResourceHandler("/upload/**")
//	          .addResourceLocations("/resources/"); 
//	    }
//	}
}
