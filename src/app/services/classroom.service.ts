import { Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Classroom} from '../classroom/classroom';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  classroomsChanged = new Subject<void>();

  classrooms: Classroom[] = [
    new Classroom(0, 'primaire', 'CP', 'A'),
    new Classroom(1, 'primaire', 'CP', 'B'),
    new Classroom(2, 'primaire', 'CE1', 'A'),
  ];
  constructor() { }

  getClassrooms(): Classroom[]{
    return this.classrooms;
  }

  addClassroom(classroom: Classroom): Classroom[]{
    classroom.id = this.classrooms.length;
    this.classrooms.push(classroom);
    return this.classrooms;
  }

  getClassroomById(id: any) {
    return this.classrooms[id];
  }

  updateClassroom(classroom: Classroom) {
    this.classrooms[classroom.id] = classroom;
  }
}
