import {Component,  OnInit} from '@angular/core';
import {Student} from "../student";
import {StudentService} from "../../services/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ClassroomService} from '../../services/classroom.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService,
              private router: Router,
              private route: ActivatedRoute,
              private classroomService: ClassroomService) {
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data: Student[]) => {
      this.students = data;
      this.students.forEach((student) => {
        this.classroomService.getClassroomById(student.classroom).subscribe(value => {
          student.classroom = value;
        });
      });
    });
  }

  onNewStudent() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
