import {Component, OnInit} from '@angular/core';
import {Classroom} from '../../classroom/classroom';
import {Student} from '../student';
import {ClassroomService} from '../../services/classroom.service';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  classrooms: Classroom[];

  student: Student;

  id: number;

  editMode = false;

  studentForm: FormGroup;

  imgSrc: string;

  selectedImage: any = null;

  oldPhotoPath: string;

  constructor(private classroomService: ClassroomService,
              private  studentService: StudentService,
              private route: ActivatedRoute,
              private router: Router,
              private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.classroomService.getClassrooms().subscribe((data: Classroom[]) => {
      this.classrooms = data;
    });

    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
      this.initForm();
    });
  }

  saveStudent() {
    console.log(this.studentForm);
    this.student = this.studentForm.value;
    if (this.editMode) {
      this.student.id = this.id;
    }
    if (this.selectedImage) {
      const namePart = this.selectedImage.name.split('.');
      const photoName = this.student.firstName + '_' + this.student.lastName + '.' + namePart[namePart.length - 1];
      const filePath = `images/${photoName}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              this.student.photo = filePath;
              this.studentService.saveStudent(this.student);
              this.studentService.studentSelected.next(this.student);
              this.router.navigate(['/students']);
            });
          })
        ).subscribe();
    } else {
      this.student.photo = this.oldPhotoPath;
      this.studentService.saveStudent(this.student);
      this.studentService.studentSelected.next(this.student);
      this.router.navigate(['/students']);
    }

  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc = 'assets/img/Placeholder.jpg';
      this.selectedImage = null;
    }
  }


  initForm() {
    let firstName = '';
    let lastName = '';
    let birthDate = '';
    let birthplace = '';
    let address = '';
    let city = '';
    let classroom = '';
    let photo = '';

    if (this.editMode) {
      const student = this.studentService.getStudent(this.id);
      firstName = student.firstName;
      lastName = student.lastName;
      birthDate = student.birthDate;
      birthplace = student.birthplace;
      address = student.address;
      city = student.city;
      classroom = student.classroom;
      const ref = this.storage.ref(student.photo);
      this.oldPhotoPath = student.photo;
      ref.getDownloadURL().subscribe((url) => {
        this.imgSrc = url;
      });
    }

    this.studentForm = new FormGroup({
      'firstName': new FormControl(firstName, Validators.required),
      'lastName': new FormControl(lastName, Validators.required),
      'birthDate': new FormControl(birthDate, Validators.required),
      'birthplace': new FormControl(birthplace, Validators.required),
      'address': new FormControl(address, Validators.required),
      'city': new FormControl(city, Validators.required),
      'classroom': new FormControl(classroom, Validators.required),
      'photo': new FormControl(photo)
    });
    this.imgSrc = 'assets/img/Placeholder.jpg ';
    this.selectedImage = null;

  }
}
