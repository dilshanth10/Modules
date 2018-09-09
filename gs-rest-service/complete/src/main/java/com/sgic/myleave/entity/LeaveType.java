package com.sgic.myleave.entity;

public class LeaveType {
	int id;
	String leaveType;
	int allocatedDays;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getLeaveType() {
		return leaveType;
	}
	public void setLeaveType(String leaveType) {
		this.leaveType = leaveType;
	}
	public int getAllocatedDays() {
		return allocatedDays;
	}
	public void setAllocatedDays(int allocatedDays) {
		this.allocatedDays = allocatedDays;
	}
	
	

}
