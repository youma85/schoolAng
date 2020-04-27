import { Component, OnInit } from '@angular/core';
import {Classroom} from "./classroom";

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {

  displayedColumns: string[] = ['id', 'cycle', 'level', 'label'];
  dataSource: Classroom[] = [
    new Classroom(1, 'primaire', 'CP', 'A'),
    new Classroom(2, 'primaire', 'CP', 'B'),
    new Classroom(3, 'primaire', 'CE1', 'A'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
