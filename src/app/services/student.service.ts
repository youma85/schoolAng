import {EventEmitter, Injectable} from '@angular/core';
import {ClassroomService} from './classroom.service';
import {Student} from "../student/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentSelected = new EventEmitter<Student>();

  students = [];

  constructor(private classroomService: ClassroomService) {
    const classrooms = this.classroomService.getClassrooms();
    this.students = [
      new Student(1, 'Arbi', 'Ahmed', new Date('20/03/2013'),
        'Casablanca', '', 'Casablanca', 'assets/img/boy1.png', classrooms[0]),
      new Student(2, 'Charaf', 'Hafssa', new Date('13/12/2018'),
        'Casablanca', '', 'Casablanca', 'assets/img/girl.png', classrooms[1]),
      new Student(3, 'Jilali', 'Mourad', new Date('20/03/2013'),
        'Casablanca', '', 'Casablanca', 'assets/img/boy2.png', classrooms[1]),
      new Student(4, 'Jilali', 'Mehdi', new Date('20/03/2006'),
        'Casablanca', '', 'Casablanca', 'assets/img/boy2.png', classrooms[1]),
    ];
  }

  getStudents() {
    return this.students;
  }

  getStudent(id: number) {
    return this.students[id];
  }

  addStudent(student: Student) {
    this.students.push(student);
  }
}
