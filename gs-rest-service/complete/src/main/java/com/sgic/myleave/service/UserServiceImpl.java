package com.sgic.myleave.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sgic.myleave.entity.User;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private HttpClient httpClient;

	List<User> users = new ArrayList<>();

	@Override
	public boolean saveUser(User user) {
		users.add(user);
		return true;
	}

	@Override
	public boolean updateUser(User user) {
		for (User existingUser : users) {
			if (existingUser.getId() == user.getId()) {
				existingUser.setName(user.getName());
				break;
			}
		}
		
		for (int i=0; i<users.size(); i++) {
			User existingUser = users.get(i);
			if(existingUser.getId() == user.getId()) {
				existingUser.setName(user.getName());
				break;
			}
		}
		
		users.forEach((User existingUser) -> {
			if (existingUser.getId() == user.getId()) {
				existingUser.setName(user.getName());
				return;
			}
		});
		return true;
	}

	@Override
	public List<User> getAllUsers() {
		return users;
	}

	@Override
	public boolean deleteUser(int userId) {
		users.removeIf((User existingUser) -> existingUser.getId() == userId);
		return false;
	}
	
	public void getWeather() {
		HttpGet request = new HttpGet("http://www.vogella.com");
		try {
			HttpResponse response = httpClient.execute(request);
			System.out.println(response.getEntity().toString());
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
