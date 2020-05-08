import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {Classroom} from "../classroom";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ClassroomService} from "../../services/classroom.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-classroom-dialog',
  templateUrl: './classroom-dialog.component.html',
  styleUrls: ['./classroom-dialog.component.scss']
})
export class ClassroomDialogComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  //@ViewChild('labelInput') labelInput: ElementRef;
  //@ViewChild('levelInput') levelInput: ElementRef;

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
      setTimeout(() => {
        this.form.setValue({
          cycle : this.classroom.cycle,
          label : this.classroom.label,
          level : this.classroom.level
  
        })
      });
      
    }else {
      this.editMode = false;
    }
  }

  onSave(f: NgForm) {

    //console.log(f);
    //console.log(f.value);
    //const cycle = this.cycleInput.nativeElement.value;
    //const label = this.labelInput.nativeElement.value;
    //const level = this.levelInput.nativeElement.value;
    this.classroom.label = f.value.label;
    this.classroom.level = f.value.level;
    this.classroom.cycle = f.value.cycle;

    if (this.editMode){
      this.classroomService.updateClassroom(this.classroom);
    }else {
      this.classroomService.addClassroom(this.classroom);
    }

    this.classroomService.classroomsChanged.next();
    this.dialogRef.close();
  }
}
