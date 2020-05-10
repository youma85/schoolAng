import {Injectable} from '@angular/core';
import {ClassroomService} from './classroom.service';
import {Student} from '../student/student';
import {Observable, Subject} from 'rxjs';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {exhaustMap, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentSelected = new Subject<Student>();

  students = [];

  url = 'http://localhost:3000';

  studentEndPoint = `${this.url}/students`;

  constructor(private classroomService: ClassroomService,
              private  http: HttpClient,
              private authService: AuthService) {
  }

  // take(1): take only one value and automatically unsubscribe
  // exhaustMap: waits for the first observable to complete
  // and give us the result of the user observable
  getStudents(): Observable<any> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        const httpOptions = {
          headers: new HttpHeaders({
            Authorization: `Bearer ${user.token}`
          })
        };
        return this.http.get<any[]>(this.studentEndPoint, httpOptions);
      }));
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
