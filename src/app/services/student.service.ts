import {Injectable} from '@angular/core';
import {ClassroomService} from './classroom.service';
import {Student} from '../student/student';
import {Observable, Subject} from 'rxjs';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentSelected = new Subject<Student>();

  students = [];

  url = 'http://localhost:3000';

  studentEndPoint = `${this.url}/students`;

  constructor(private classroomService: ClassroomService,
              private  http: HttpClient) {
  }

  getStudents(): Observable<any> {
    return this.http.get<any[]>(this.studentEndPoint);
  }

  getStudent(id: number) {
    return this.http.get<any>(`${this.studentEndPoint}/${id}`);
  }

  saveStudent(student: Student): Observable<any>{
    if (student.id === undefined){
      return this.http.post(this.studentEndPoint, student);
    } else {
      return  this.http.patch(`${this.studentEndPoint}/${student.id}`, student);
    }

  }
}
