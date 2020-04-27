import {Component, Input, OnInit} from '@angular/core';
import {Classroom} from "../../classroom/classroom";
import {Student} from "../student";
import {ClassroomService} from "../../services/classroom.service";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  classrooms: Classroom[];

  @Input() student: Student;

  constructor(private classroomService: ClassroomService) { }

  ngOnInit(): void {
    this.classrooms = this.classroomService.getClassrooms();
  }


  onImageUploaded($event: Event) {

  }
}
