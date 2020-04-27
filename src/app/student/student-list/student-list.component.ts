import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {Classroom} from "../../classroom/classroom";
import {Student} from "../student";
import {ClassroomService} from "../../services/classroom.service";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Output() studentSelected = new EventEmitter<Student>();

  students: Student[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  onStudentSelected(student: Student) {
    this.studentSelected.emit(student);
  }

}
