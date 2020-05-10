import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {Classroom} from '../classroom';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ClassroomService} from '../../services/classroom.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-classroom-dialog',
  templateUrl: './classroom-dialog.component.html',
  styleUrls: ['./classroom-dialog.component.scss']
})
export class ClassroomDialogComponent implements OnInit {

  @ViewChild('form') classroomForm: NgForm;

  editMode = false;

  classroom: Classroom;

  constructor(
    public dialogRef: MatDialogRef<ClassroomDialogComponent>,
    private classroomService: ClassroomService,
    @Inject(MAT_DIALOG_DATA) public data: Classroom) {
    this.classroom = data;
  }

  ngOnInit(): void {
    if (this.classroom.id !== undefined){
      this.editMode = true;

      setTimeout(() => {
        this.classroomForm.setValue({
          cycle: this.classroom.cycle,
          label: this.classroom.label,
          level: this.classroom.level,
        });
      });
    }else {
      this.editMode = false;
    }

  }

  onSave(form: NgForm) {
    this.classroom.label = form.value.label;
    this.classroom.level = form.value.level;
    this.classroom.cycle = form.value.cycle;

    if (this.editMode){
      this.classroomService.updateClassroom(this.classroom).subscribe(value => {
        this.classroomService.classroomsChanged.next();
        this.dialogRef.close();
      });
    }else {
      this.classroomService.addClassroom(this.classroom).subscribe(value => {
        this.classroomService.classroomsChanged.next();
        this.dialogRef.close();
      });
    }
  }
}
