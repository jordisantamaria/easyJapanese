package com.easyJapanese.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="vocabList")
public class VocabList implements Serializable {

	@Id
	@Column(name="id_vocabList")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id_vocabList;
	
	@Column(name="name")
	private String name;
	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name="id_vocabItem")
	private Set<VocabItem> vocabItems;
	
	public VocabList() {
		// TODO Auto-generated constructor stub
	}

	public VocabList(String name) {
		super();
		this.name = name;
	}

	public VocabList(String name, Set<VocabItem> vocabItems) {
		super();
		this.name = name;
		this.vocabItems = vocabItems;
	}

	public Long getId() {
		return id_vocabList;
	}

	public void setId(Long id) {
		this.id_vocabList = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<VocabItem> getVocabItems() {
		return vocabItems;
	}

	public void setVocabItems(Set<VocabItem> vocabItems) {
		this.vocabItems = vocabItems;
	}
	
	
}
