package com.easyJapanese.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easyJapanese.dao.UserDao;
import com.easyJapanese.model.User;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	private UserDao userDao;
	
	@Override
	public void saveUser(User user) {
		// TODO Auto-generated method stub
		this.userDao.saveUser(user);
	}

	@Override
	public void deleteUserById(Long id) {
		// TODO Auto-generated method stub
		this.userDao.deleteUserById(id);
	}

	@Override
	public void updateUser(User user) {
		// TODO Auto-generated method stub
		this.userDao.updateUser(user);
	}

	@Override
	public User findById(Long id) {
		// TODO Auto-generated method stub
		return this.userDao.findById(id);
	}

}
