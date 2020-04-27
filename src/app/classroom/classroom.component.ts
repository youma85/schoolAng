import { Component, OnInit } from '@angular/core';
import {Classroom} from "./classroom";
import {MatTableDataSource} from "@angular/material/table";
import {ClassroomService} from "../services/classroom.service";

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {

  displayedColumns: string[] = ['id', 'cycle', 'level', 'label'];

  dataSource: MatTableDataSource<Classroom>;

  constructor(private classroomService: ClassroomService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.classroomService.getClassrooms());
  }

  onClassroomAdded(classroom: Classroom) {
    this.classroomService.getClassrooms().push(classroom);
    this.dataSource = new MatTableDataSource(this.classroomService.getClassrooms());
  }
}
