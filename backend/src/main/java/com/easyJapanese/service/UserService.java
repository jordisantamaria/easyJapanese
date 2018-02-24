package com.easyJapanese.service;

import com.easyJapanese.model.User;

public interface UserService {
	void saveUser(User user);
	
	void deleteUserById(Long id);
	
	void updateUser(User user);

	User findById(Long id);
}
