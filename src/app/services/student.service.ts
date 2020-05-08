import {Injectable} from '@angular/core';
import {ClassroomService} from './classroom.service';
import {Student} from '../student/student';
import {Subject} from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentSelected = new Subject<Student>();

  students = [];

  constructor(private classroomService: ClassroomService) {
    const classrooms = this.classroomService.getClassrooms();
    this.students = [
      new Student(0, 'Arbi', 'Ahmed', moment('20/03/2013','DD/MM/YYYY').toDate(),
        'Casablanca', '', 'Casablanca', 'images/boy1.png', classrooms[0]),
      new Student(1, 'Charaf', 'Hafssa', moment('20/04/2013','DD/MM/YYYY').toDate(),
        'Casablanca', '', 'Casablanca', 'images/girl.png', classrooms[1]),
      new Student(2, 'Jilali', 'Mourad', moment('20/05/2013','DD/MM/YYYY').toDate(),
        'Casablanca', '', 'Casablanca', 'images/boy2.png', classrooms[1]),
      new Student(3, 'Jilali', 'Mehdi', moment('20/06/2013','DD/MM/YYYY').toDate(),
        'Casablanca', '', 'Casablanca', 'images/boy2.png', classrooms[1]),
    ];
  }

  getStudents() {
    return this.students;
  }

  getStudent(id: number) {
    return this.students[id];
  }

  saveStudent(student: Student) {
    if (student.id === undefined){
      this.students.push(student);
    } else {
      this.students[student.id] = student;
    }
  }
}
