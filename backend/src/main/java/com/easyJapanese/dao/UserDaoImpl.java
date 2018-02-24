package com.easyJapanese.dao;

import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.easyJapanese.model.User;

@Repository
@Transactional
public class UserDaoImpl extends AbstractSession implements UserDao{

	@Override
	public void saveUser(User user) {
		// TODO Auto-generated method stub
		getSession().persist(user);

	}

	@Override
	public void deleteUserById(Long id) {
		// TODO Auto-generated method stub
		User user = findById(id);
		if (user  != null) {
			getSession().delete(user );
		}
	}

	@Override
	public void updateUser(User user) {
		// TODO Auto-generated method stub
		getSession().update(user);

	}

	@Override
	public User findById(Long id) {
		// TODO Auto-generated method stub
		return (User) getSession().get(User.class, id);
	}

}
