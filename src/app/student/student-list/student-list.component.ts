import {Component,  OnInit} from '@angular/core';
import {Student} from "../student";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

}
