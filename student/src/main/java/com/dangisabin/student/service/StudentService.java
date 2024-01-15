package com.dangisabin.student.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dangisabin.student.model.Student;
import com.dangisabin.student.repository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	StudentRepository studentRepository;

	public List<Student> findAllStudents() {
		
		return studentRepository.findAll();
	}

	public Student findStudentById(Integer studentId) {
		
		return studentRepository.findById(studentId).get();
	}

	public Student addStudent(Student newStudent) {
		
		return studentRepository.save(newStudent);
	}

	public void deleteStudent(Integer studentId) {
		studentRepository.deleteById(studentId);
	}

	public void updateStudent(Student updateStudent) {
		
		Student oldStudent=studentRepository.findById(updateStudent.getStudentid()).get();
		
		if(oldStudent!=null) {
			oldStudent.setStudentName(updateStudent.getStudentName());
			oldStudent.setGender(updateStudent.getGender());
			oldStudent.setSubject1(updateStudent.getSubject1());
			oldStudent.setSubject2(updateStudent.getSubject2());
			oldStudent.setSubject3(updateStudent.getSubject3());
			oldStudent.setTotalmarks(updateStudent.getTotalmarks());
			oldStudent.setPercentage(updateStudent.getPercentage());
			
			studentRepository.save(oldStudent);
		}
		
	}

}
