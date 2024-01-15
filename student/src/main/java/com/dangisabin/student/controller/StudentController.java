package com.dangisabin.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dangisabin.student.model.Student;
import com.dangisabin.student.service.StudentService;

@RestController
@RequestMapping("/student")       // http:localhost:8082/student/
@CrossOrigin //frontend: http:localhost:4200
public class StudentController {
	
	@Autowired
	StudentService studentService;
	
	@GetMapping("/")
	public String sayHello() {
		return "Hello World!";
	}
	
	@GetMapping("/all")
	public List<Student> findAllStudents() {
		return studentService.findAllStudents();
	}
	
	@GetMapping("/{studentId}")
	public Student findStudentById(@PathVariable Integer studentId) {
		return studentService.findStudentById(studentId);
	}
	
	@PostMapping("/add")
	public Student addStudent(@RequestBody Student newStudent) {
		return studentService.addStudent(newStudent);
	}
	
	@DeleteMapping("/delete/{studentId}")
	public void deleteStudent(@PathVariable int studentId) {
		 studentService.deleteStudent(studentId);
	}
	
	@PutMapping("/update")
	public void updateStudent(@RequestBody Student existingStudent) {
		 studentService.updateStudent(existingStudent);
	}
}
