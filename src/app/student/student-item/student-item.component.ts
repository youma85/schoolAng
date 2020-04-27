import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from "../student";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {

  @Input() student: Student;
  @Output() studentSelected = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getImgContent(img: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

  onClick() {
    this.studentSelected.emit();
  }
}
