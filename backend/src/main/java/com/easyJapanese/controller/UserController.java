package com.easyJapanese.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.easyJapanese.model.User;
import com.easyJapanese.service.UserService;

@Controller
public class UserController {

	@Autowired
	private UserService userService;
	
	//GET BY ID
	@RequestMapping(value = "/users/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
    public ResponseEntity<User> getUserById(
    		@PathVariable("id") Long id 
    		){
		User user = this.userService.findById(id);
		if(user == null) {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}
		
		return new ResponseEntity(user, HttpStatus.OK);
	}
	
	//CREATE
	@RequestMapping(value = "/users", method = RequestMethod.POST, headers = "Accept=application/json")
	public ResponseEntity<User> createUser(
    		@RequestBody User user 
    		){
		if (user == null) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		this.userService.saveUser(user);
		
		return new ResponseEntity(user, HttpStatus.CREATED);

		
	}
	
}
