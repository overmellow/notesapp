package com.wv.mfaraji.notesapp.server.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.wv.mfaraji.notesapp.server.users.Role;
import com.wv.mfaraji.notesapp.server.users.User;
import com.wv.mfaraji.notesapp.server.users.UserRepositoty;

import static java.util.Collections.emptyList;

import java.util.HashSet;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
    private UserRepositoty userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (userRepository == null) {
            throw new UsernameNotFoundException(username);
        }
        
        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        for (Role role : user.getRoles()){
            grantedAuthorities.add(new SimpleGrantedAuthority(role.getRole()));
        }
        
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), grantedAuthorities);
        //return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), emptyList());
    }
}


