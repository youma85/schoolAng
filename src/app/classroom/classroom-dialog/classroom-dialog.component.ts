import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Classroom} from "../classroom";

@Component({
  selector: 'app-classroom-dialog',
  templateUrl: './classroom-dialog.component.html',
  styleUrls: ['./classroom-dialog.component.scss']
})
export class ClassroomDialogComponent implements OnInit {
  @ViewChild('cycleInput') cycleInput: ElementRef;
  @ViewChild('labelInput') labelInput: ElementRef;
  @ViewChild('levelInput') levelInput: ElementRef;
  @Output() classroomAdded = new EventEmitter<Classroom>();

  constructor() { }

  ngOnInit(): void {
  }

  onSave() {
    const cycle = this.cycleInput.nativeElement.value;
    const label = this.labelInput.nativeElement.value;
    const level = this.levelInput.nativeElement.value;

    this.classroomAdded.emit(new Classroom(0, cycle, level, label));
    this.cycleInput.nativeElement.value = '';
    this.labelInput.nativeElement.value = '';
    this.levelInput.nativeElement.value = '';
  }
}
