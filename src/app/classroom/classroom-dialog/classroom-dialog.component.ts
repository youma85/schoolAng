import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {Classroom} from "../classroom";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ClassroomService} from "../../services/classroom.service";

@Component({
  selector: 'app-classroom-dialog',
  templateUrl: './classroom-dialog.component.html',
  styleUrls: ['./classroom-dialog.component.scss']
})
export class ClassroomDialogComponent implements OnInit {
  @ViewChild('cycleInput') cycleInput: ElementRef;
  @ViewChild('labelInput') labelInput: ElementRef;
  @ViewChild('levelInput') levelInput: ElementRef;

  editMode = false;

  classroom: Classroom;

  constructor(
    public dialogRef: MatDialogRef<ClassroomDialogComponent>,
    private classroomService: ClassroomService,
    @Inject(MAT_DIALOG_DATA) public data: Classroom) {
    this.classroom = data;
  }

  ngOnInit(): void {
    if (this.classroom.id!== undefined){
      this.editMode = true;
    }else {
      this.editMode = false;
    }
  }

  onSave() {
    const cycle = this.cycleInput.nativeElement.value;
    const label = this.labelInput.nativeElement.value;
    const level = this.levelInput.nativeElement.value;

    if (this.editMode){
      this.classroomService.updateClassroom(new Classroom(this.classroom.id, cycle, level, label));
    }else {
      this.classroomService.addClassroom(new Classroom(0, cycle, level, label));
    }

    this.classroomService.classroomsChanged.next();
    this.dialogRef.close();
  }
}
