import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {Classroom} from "../../classroom/classroom";
import {Student} from "../student";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  classroom: Classroom[] = [
    new Classroom(1, 'Primaire', 'C2', 'C2 B'),
    new Classroom(2,  'matérnelle', 'PS', 'PS A')
  ];

  students: Student[] =  [
    new Student(1, 'Arbi', 'Ahmed', new Date('20/03/2013'),
      'Casablanca', '', 'Casablanca', 'assets/img/boy1.png', this.classroom[0]),
    new Student(2, 'Charaf', 'Hafssa', new Date('13/12/2018'),
      'Casablanca', '', 'Casablanca', 'assets/img/girl.png', this.classroom[1]),
    new Student(1, 'Jilali', 'Mourad', new Date('20/03/2013'),
      'Casablanca', '', 'Casablanca', 'assets/img/boy2.png', this.classroom[1]),
  ];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getImgContent(img: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }
}
