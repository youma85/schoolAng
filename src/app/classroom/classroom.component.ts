import { Component, OnInit } from '@angular/core';
import {Classroom} from "./classroom";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {

  displayedColumns: string[] = ['id', 'cycle', 'level', 'label'];
  classrooms: Classroom[] = [
    new Classroom(1, 'primaire', 'CP', 'A'),
    new Classroom(2, 'primaire', 'CP', 'B'),
    new Classroom(3, 'primaire', 'CE1', 'A'),
  ];

  dataSource: MatTableDataSource<Classroom>;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.classrooms);
  }

  onClassroomAdded(classroom: Classroom) {
    this.classrooms.push(classroom);
    this.dataSource = new MatTableDataSource(this.classrooms);
  }
}
