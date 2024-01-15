import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../shared/student-service.service';
import { Student } from '../shared/student.model';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  constructor(private router: Router, private studentService:StudentServiceService,private route:ActivatedRoute) { }

  selectedStudent: Student=new Student();
  
  ngOnInit() {
    console.log('inside StudentUpdateComponent ');
    this.selectedStudent;

    //Retrieve the note from the query parameters
    const noteString = this.route.snapshot.queryParamMap.get('selectedStudent');
    console.log(noteString);
    if (noteString) {
      this.selectedStudent = JSON.parse(noteString);
    }
   }

   goBack():void{
    this.router.navigate(['/student-list']);
   }

   updateStudent():void{
    this.studentService.editStudent(this.selectedStudent).subscribe(
      (response:Student)=>{
        console.log('updated student',response);
      },
      (error: any) => {
        console.error('An error occurred while adding a student:', error);
      }
    );
    // clear the form
    //form.reset();
    this.router.navigate(['/student-list']);
    }
}
