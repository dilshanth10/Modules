package com.sgic.myleave.entity;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class User {
	
	Integer id;
	@NotEmpty(message="Name can not be null.")
	@Size(min=2, max=5, message="Name has to be 2-5 characters")
	String name;
	String address;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	

}
