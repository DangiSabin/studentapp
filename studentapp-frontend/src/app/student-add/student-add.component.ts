import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from '../shared/student-service.service';
import { Student } from '../shared/student.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit{

  constructor(private router: Router, private studentService:StudentServiceService) { }

  newStudent:Student=new Student();

  ngOnInit() {
    
    console.log('inside StudentAddComponent ');
   
   }

   onSubmit(form: NgForm) {
    this.newStudent.studentName=form.value.studentName;
    this.newStudent.gender=form.value.gender;
    this.newStudent.subject1=form.value.subject1;
    this.newStudent.subject2=form.value.subject2;
    this.newStudent.subject3=form.value.subject3;

    console.log('new student: ',this.newStudent);

    this.studentService.addStudent(this.newStudent).subscribe(
      (response:Student)=>{
        console.log('New student added',response);
      },
      (error: any) => {
        console.error('An error occurred while adding a student:', error);
      }
    );
    this.router.navigate(['/student-list']);
   }

   addStudent():void{
    console.log('inside addStudent ');
   }

   clear():void{
     //this to clear form
   }

   goBack():void{
    this.router.navigate(['/student-list']);
   }
}
