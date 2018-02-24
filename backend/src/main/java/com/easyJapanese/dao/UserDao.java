package com.easyJapanese.dao;

import java.util.List;

import com.easyJapanese.model.User;

public interface UserDao {
	void saveUser(User user);
	
	void deleteUserById(Long id);
	
	void updateUser(User user);

	User findById(Long id);

}
