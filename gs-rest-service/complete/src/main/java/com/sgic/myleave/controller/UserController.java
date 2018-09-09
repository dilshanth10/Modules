package com.sgic.myleave.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sgic.myleave.entity.User;
import com.sgic.myleave.service.UserService;


@RestController
public class UserController {
//	List<User> users = new ArrayList<>();
	
	@Autowired
	public UserService userService;
	
//	@GetMapping("/users")
//	public List<User> getAllUsers() {
//		return users;
//	}
	
	@GetMapping("/users")
	public List<User> getAllusers(){
		return userService.getAllUsers();
	}
	
//	
//	@PostMapping(value = "/users")
//	public String createUser(@RequestBody User user, final HttpServletResponse response) {
//		users.add(user);
//		return "HTTP Response: \n " + response;
//		
//	}
	
	@PostMapping("/users")
	public boolean createUser(@Valid @RequestBody User user) {
		return userService.saveUser(user);
	}

	
//	@PutMapping("/users/{id}")
//	public String updateUser(@RequestBody User user, @PathVariable Integer id){
//		for(int i=0; i<users.size(); i++) {
//			User userObj = users.get(i);
////			Integer x = userObj.getId();
//			if(userObj.getId().equals(id)) {
//				users.set(i, user);
//				return "success update";
//			}
//		}
//		return "HTTP PUT has called: \n";
//	}

	@PutMapping("/users")
	public boolean updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}
	
//	@DeleteMapping("/users/{id}")
//	public HttpStatus deleteUser(@RequestBody User user, @PathVariable Integer id){
//		boolean removed = users.removeIf(u -> u.getId().equals(id));
//		if(removed == true) {
//			return HttpStatus.OK;
//		}
//		else {
//			return HttpStatus.FORBIDDEN;
//		}
//	}
	
	@DeleteMapping("/users/{id}")
	public boolean deleteUser(@PathVariable Integer id) {
		return userService.deleteUser(id);
	}
}
