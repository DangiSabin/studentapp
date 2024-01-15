import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  students: Student[] =new Array<Student>();
  private url='';
  private baseurl=`http://localhost:8082/student`;

  constructor(private http: HttpClient) { }

  //get all students
  getAll():Observable<Student[]>  {
    console.log('url: ',this.url);
    this.url=`${this.baseurl}/all`;
    return this.http.get<Student[]>(this.url);
  }

  //delete student
  deleteStudent(id:number): Observable<void> {
    this.url=`${this.baseurl}/delete/${id}`;
    console.log('delete url:',this.url);
    console.log('inside deleteStudent method in service for studentid:',id);
    return this.http.delete<void>(this.url);
  }

  //add new student
  addStudent(newStudent:Student):Observable<Student>{
    this.url=`${this.baseurl}/add`;
    console.log('add url: ',this.url);
    console.log('url:', '${this.baseurl}/add');
    return this.http.post<Student>(this.url,newStudent);
  }

  //update student
  editStudent(updateStudent:Student):Observable<Student>{
    this.url=`${this.baseurl}/update`;
    console.log('update url: ',this.url);
    return this.http.put<Student>(this.url,updateStudent);
  }
}
