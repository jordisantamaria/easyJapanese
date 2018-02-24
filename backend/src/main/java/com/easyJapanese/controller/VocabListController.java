package com.easyJapanese.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.easyJapanese.dao.VocabListDaoImpl;
import com.easyJapanese.model.User;
import com.easyJapanese.model.VocabItem;
import com.easyJapanese.model.VocabList;
import com.easyJapanese.service.VocabListServiceImpl;

@Controller
public class VocabListController {

	@Autowired
	private VocabListServiceImpl vocabListService;
	
	//CREATE
	@RequestMapping(value = "/vocabList", method = RequestMethod.POST, headers = "Accept=application/json")
	public ResponseEntity<VocabList> createVocabList(
    		@RequestBody VocabList vocabList 
    		){
		if (vocabList == null) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		//VocabItem item0 = (VocabItem) vocabList.getVocabItems().toArray()[0];

		//VocabItem item1 = (VocabItem) vocabList.getVocabItems().toArray()[1];
		//System.out.println("vocabList items = "+item0.getHiragana() +" "+ item1.getHiragana());
		this.vocabListService.saveList(vocabList);
		
		return new ResponseEntity(vocabList, HttpStatus.CREATED);

	}
	
	//GET lists
	@RequestMapping(value = "/vocabList", method = RequestMethod.GET)
    public ResponseEntity<List<VocabList>> getVocabLists(){
		List<VocabList> vocabList = new ArrayList<VocabList>();
		
		vocabList = this.vocabListService.findAllList();
		return new ResponseEntity<List<VocabList>>(vocabList, HttpStatus.OK);
	
    }
	
}
