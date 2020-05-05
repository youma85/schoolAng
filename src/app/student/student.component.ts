import { Component, OnInit } from '@angular/core';
import {Student} from "./student";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  currentStudent: Student;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.studentSelected.subscribe(
      (student: Student) => {
        this.currentStudent= student;
      }
    );
  }

}
