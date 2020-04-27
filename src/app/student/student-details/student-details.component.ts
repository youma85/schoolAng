import {Component, Input, OnInit} from '@angular/core';
import {Classroom} from "../../classroom/classroom";
import {Student} from "../student";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  classrooms: Classroom[] = [
    new Classroom(1, 'Primaire', 'C2', 'B'),
    new Classroom(2,  'matérnelle', 'PS', 'A')
  ];

  @Input() student: Student;


  constructor() { }

  ngOnInit(): void {
  }


  onImageUploaded($event: Event) {

  }
}
