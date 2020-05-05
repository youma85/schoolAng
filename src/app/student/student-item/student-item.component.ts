import {Component,  Input, OnInit} from '@angular/core';
import {Student} from "../student";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {

  @Input() student: Student;

  constructor(private studentService: StudentService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getImgContent(img: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

  onClick() {
    this.studentService.studentSelected.emit(this.student);
  }
}
