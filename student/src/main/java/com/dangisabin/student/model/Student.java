package com.dangisabin.student.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="student")
public class Student {
	
	// rollNo, studentName, gender, subject1, subject2,
	//subject3, totalmarks, percentage
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int studentid;
	
	@Column(name="studentname")
	private String studentName;
	@Column(name="gender")
	private String gender;
	@Column(name="subject1")
	private String subject1;
	@Column(name="subject2")
	private String subject2;
	@Column(name="subject3")
	private String subject3;
	@Column(name="totalmarks")
	private String totalmarks;
	@Column(name="percentage")
	private String percentage;
	
	public Student(int studentid, String studentName, String gender, String subject1, String subject2, String subject3,
			String totalmarks, String percentage) {
		super();
		this.studentid = studentid;
		this.studentName = studentName;
		this.gender = gender;
		this.subject1 = subject1;
		this.subject2 = subject2;
		this.subject3 = subject3;
		this.totalmarks = totalmarks;
		this.percentage = percentage;
	}

	public Student() {
		super();
	}

	public int getStudentid() {
		return studentid;
	}

	public void setStudentid(int studentid) {
		this.studentid = studentid;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getSubject1() {
		return subject1;
	}

	public void setSubject1(String subject1) {
		this.subject1 = subject1;
	}

	public String getSubject2() {
		return subject2;
	}

	public void setSubject2(String subject2) {
		this.subject2 = subject2;
	}

	public String getSubject3() {
		return subject3;
	}

	public void setSubject3(String subject3) {
		this.subject3 = subject3;
	}

	public String getTotalmarks() {
		return totalmarks;
	}

	public void setTotalmarks(String totalmarks) {
		this.totalmarks = totalmarks;
	}

	public String getPercentage() {
		return percentage;
	}

	public void setPercentage(String percentage) {
		this.percentage = percentage;
	}
	
	
	
	
	
	
	
	
}
