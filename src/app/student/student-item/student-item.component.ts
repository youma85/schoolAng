import {Component,  Input, OnInit} from '@angular/core';
import {Student} from '../student';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {StudentService} from '../../services/student.service';
import {Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {

  @Input() student: Student;

  imgSrc: string;

  constructor(private studentService: StudentService,
              private sanitizer: DomSanitizer,
              private router: Router,
              private storage: AngularFireStorage) { }

  ngOnInit(): void {
    const ref = this.storage.ref(this.student.photo);
    ref.getDownloadURL().subscribe((url) => {
      this.imgSrc = url;
    });
  }

  getImgContent(img: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

  onClick(idStudent: number) {
    this.studentService.studentSelected.next(this.student);
    this.router.navigate(['/students', idStudent]);
  }
}
