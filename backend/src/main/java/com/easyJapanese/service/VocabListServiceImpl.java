package com.easyJapanese.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easyJapanese.dao.VocabListDaoImpl;
import com.easyJapanese.model.User;
import com.easyJapanese.model.VocabList;

@Service("vocabListService")
@Transactional
public class VocabListServiceImpl {
	
	@Autowired
	private VocabListDaoImpl _vocabList;
	
	public void saveList(VocabList vocabList) {
		// TODO Auto-generated method stub
		this._vocabList.saveList(vocabList);
	}

	public void deleteListById(Long id) {
		// TODO Auto-generated method stub
		this._vocabList.deleteListById(id);
	}

	
	public void updateList(User user) {
		// TODO Auto-generated method stub
		this._vocabList.updateList(user);
	}

	
	public List<VocabList> findAllList() {
		// TODO Auto-generated method stub
		return this._vocabList.findAllList();
	}
	
	public VocabList findById(Long id) {
		// TODO Auto-generated method stub
		return this._vocabList.findById(id);
	}
}
