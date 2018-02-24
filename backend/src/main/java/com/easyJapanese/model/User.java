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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;



@Entity
@Table(name="user")
public class User implements Serializable{

	@Id
	@Column(name="id_user")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id_user;
	
	@Column(name="nickname")
	private String nickname;
	
	@Column(name="mail")
	private String mail;
	
	@Column(name="password")
	private String password;
	
	@Column(name="avatar")
	private String avatar;
	

	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name="id")
	private Set<VocabList> vocabLists;

	public User() {
		// TODO Auto-generated constructor stub
	}


	public User(String nickname, String mail, String password) {
		super();
		this.nickname = nickname;
		this.mail = mail;
		this.password = password;
	}



	public Long getId() {
		return id_user;
	}



	public void setId(Long id) {
		this.id_user = id;
	}



	public String getNickname() {
		return nickname;
	}



	public void setNickname(String nickname) {
		this.nickname = nickname;
	}



	public String getMail() {
		return mail;
	}



	public void setMail(String mail) {
		this.mail = mail;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getAvatar() {
		return avatar;
	}



	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}



	public Set<VocabList> getVocabLists() {
		return vocabLists;
	}



	public void setVocabLists(Set<VocabList> vocabLists) {
		this.vocabLists = vocabLists;
	}
	
	
}
