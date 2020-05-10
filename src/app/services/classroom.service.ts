import {Injectable} from '@angular/core';
import {Classroom} from "../classroom/classroom";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  url='http://localhost:3000';
  classroomEndPoint= `${this.url}/classrooms`;

  classroomsChanged = new Subject<void>();

  classrooms: Classroom[] = [];

  constructor(private  http:HttpClient) { }

  getClassrooms(): Observable<any> {
    return this.http.get<any>(this.classroomEndPoint);
  }

  addClassroom(classroom: Classroom): Observable<any>{
    return this.http.post(this.classroomEndPoint, classroom);
  }

  getClassroomById(id: any) {
    return this.http.get<any>(`${this.classroomEndPoint}/${id}`);
  }

  updateClassroom(classroom: Classroom) : Observable<any>{
    return this.http.patch(`${this.classroomEndPoint}/${classroom.id}`, classroom);
  }
}
