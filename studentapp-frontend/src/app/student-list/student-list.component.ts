import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/student.model';
import { Router } from '@angular/router';
import { StudentServiceService } from '../shared/student-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(private router: Router, private studentService:StudentServiceService) { }

  ngOnInit() {
    console.log('inside StudentListComponent ');
    this.getStudents();
   }

   getStudents(): void {
    this.studentService.getAll().subscribe(
      students  => {
        console.log('API response:', students);
        this.students = students;
        console.log('Students: ', this.students);
      },
      error => {
        // Handle the error
        console.error(error);
      }
    );
  }

  addStudent():void{
    console.log('inside addStudent');
    this.router.navigate(['/student-add']);
  }

  editStudent(selectedStudent:Student):void{
    console.log('inside editStudent');
    this.router.navigate(['/student-update'], 
    { queryParams: { selectedStudent: JSON.stringify(selectedStudent) }});
    this.studentService.editStudent(selectedStudent);
  }

  deleteStudent(student:Student):void{
    console.log('inside deleteStudent');
    console.log('Student: ',student);
    let studentId=Number(student.studentid);

    this.studentService.deleteStudent(studentId).subscribe(() => {
      console.log(' Student deleted successfully');
        // Perform any additional actions if needed
     },
      (error: any) => {
       console.error('An error occurred while deleting the student record:', error);
     }
   );
   this.router.navigate(['/student-list']);
  }
}
