package com.easyJapanese.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.easyJapanese.model.User;
import com.easyJapanese.model.VocabList;

@Repository
@Transactional
public class VocabListDaoImpl extends AbstractSession {

	
	public void saveList(VocabList vocabList) {
		// TODO Auto-generated method stub
		getSession().persist(vocabList);
	}

	public void deleteListById(Long id) {
		// TODO Auto-generated method stub
		if(findById(id) != null) {
			this.getSession().delete(id);
		}
	}

	
	public void updateList(User user) {
		// TODO Auto-generated method stub
		this.getSession().update(user);
	}

	
	public List<VocabList> findAllList() {
		// TODO Auto-generated method stub
		return this.getSession().createQuery("from VocabList").list();
	}
	
	public VocabList findById(Long id) {
		// TODO Auto-generated method stub
		return (VocabList) getSession().get(VocabList.class, id);
	}

}
