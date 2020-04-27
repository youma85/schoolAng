import { Injectable } from '@angular/core';
import {Classroom} from "../classroom/classroom";

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  classrooms: Classroom[] = [
    new Classroom(1, 'primaire', 'CP', 'A'),
    new Classroom(2, 'primaire', 'CP', 'B'),
    new Classroom(3, 'primaire', 'CE1', 'A'),
  ];
  constructor() { }

  getClassrooms(): Classroom[]{
    return this.classrooms;
  }
}
