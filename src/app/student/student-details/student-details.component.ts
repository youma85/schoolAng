import {Component, Input, OnInit} from '@angular/core';
import {Classroom} from "../../classroom/classroom";
import {Student} from "../student";
import {ClassroomService} from "../../services/classroom.service";
import {StudentService} from "../../services/student.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  classrooms: Classroom[];

  @Input() student: Student;

  id: number;

  editMode = false;

  constructor(private classroomService: ClassroomService,
              private  studentService: StudentService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.classrooms = this.classroomService.getClassrooms();

    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.student = this.studentService.getStudent(this.id);
      this.editMode =  params.id != null;
    });

    if (!this.editMode){
      this.student = new Student();
      this.student.classroom = new Classroom();
    }
  }


  onImageUploaded($event: Event) {

  }
}
