import { Component, OnInit } from '@angular/core';
import {Classroom} from "./classroom";
import {MatTableDataSource} from "@angular/material/table";
import {ClassroomService} from "../services/classroom.service";
import {ClassroomDialogComponent} from "./classroom-dialog/classroom-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {

  displayedColumns: string[] = ['id', 'cycle', 'level', 'label'];

  dataSource: MatTableDataSource<Classroom>;

  constructor(private classroomService: ClassroomService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.classroomService.getClassrooms().subscribe((data: Classroom[]) => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.classroomService.classroomsChanged.subscribe(() => {
      this.classroomService.getClassrooms().subscribe((data: Classroom[]) => {
        this.dataSource = new MatTableDataSource(data);
      });
    });
  }

  showDataInDialog(id: any) {
    this.classroomService.getClassroomById(id).subscribe(value => {
      const dialogRef = this.dialog.open(ClassroomDialogComponent, {
        width: '300px',
        data: value
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ClassroomDialogComponent, {
      width: '300px',
      data: new Classroom()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
