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
@Table(name="vocabItem")
public class VocabItem implements Serializable {

	@Id
	@Column(name="id_vocabItem")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id_vocabItem;
	
	@Column(name="kanji")
	private String kanji;
	
	@Column(name="hiragana")
	private String hiragana;
	
	@Column(name="translation")
	private String translation;
	
	@Column(name="relation")
	private String relation;

	@Column(name="review")
	private Boolean review = false;
	
	public VocabItem() {
		// TODO Auto-generated constructor stub
	}

	public VocabItem(String kanji, String hiragana, String translation) {
		super();
		this.kanji = kanji;
		this.hiragana = hiragana;
		this.translation = translation;
	}
	public VocabItem(String kanji, String hiragana, String translation, String relation) {
		super();
		this.kanji = kanji;
		this.hiragana = hiragana;
		this.translation = translation;
		this.relation = relation;
	}

	public Long getId() {
		return id_vocabItem;
	}

	public void setId(Long id) {
		this.id_vocabItem = id;
	}

	public String getKanji() {
		return kanji;
	}

	public void setKanji(String kanji) {
		this.kanji = kanji;
	}

	public String getHiragana() {
		return hiragana;
	}

	public void setHiragana(String hiragana) {
		this.hiragana = hiragana;
	}

	public String getTranslation() {
		return translation;
	}

	public void setTranslation(String translation) {
		this.translation = translation;
	}

	public String getRelation() {
		return relation;
	}

	public void setRelation(String relation) {
		this.relation = relation;
	}

	public Boolean getReview() {
		return review;
	}

	public void setReview(Boolean review) {
		this.review = review;
	}
	
	
	

}
