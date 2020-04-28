import {Component,  OnInit} from '@angular/core';
import {Student} from "../student";
import {StudentService} from "../../services/student.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  onNewStudent() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
