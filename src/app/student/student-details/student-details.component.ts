import {Component, Input, OnInit} from '@angular/core';
import {Classroom} from "../../classroom/classroom";
import {Student} from "../student";
import {ClassroomService} from "../../services/classroom.service";
import {StudentService} from "../../services/student.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  classrooms: Classroom[];

  @Input() student: Student;

  id: number;
  editMode = false;
  studentForm : FormGroup;
  imagesSrc : string;
  selectedImg : any;

  constructor(private classroomService: ClassroomService,
              private  studentService: StudentService,
              private route: ActivatedRoute,
              private router: Router,
              private storage:AngularFireStorage) { }

  ngOnInit(): void {

    this.classrooms = this.classroomService.getClassrooms();

    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode =  params.id != null;
      this.initForm();
      
    });
    

  }


  onImageUploaded(event: any) {
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e: any) => this.imagesSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImg = event.target.files[0];
    }else{
      this.imagesSrc = 'assets/img/clickHere.png';
      this.selectedImg = null;
    }
  }

  saveStudent() {
    this.studentForm = this.studentForm.value;
    if(this.selectedImg){

    }else{
      this.studentService.saveStudent(this.student);
      this.studentService.studentSelected.next(this.student);
      this.router.navigate(['/students']);
    }

  }

  initForm(){
    let lastName = '';
    let firstName = '';
    let birthDate = '';
    let birthPlace = '';
    let address = '';
    let city = '';
    let photo = '';
    let classroom = '';

    if(this.editMode){
      this.student = this.studentService.getStudent(this.id);
      lastName = this.student.lastName;
      firstName = this.student.firstName;
      birthDate = this.student.birthDate;
      birthPlace = this.student.birthplace;
      address = this.student.address;
      city = this.student.city;
      photo = this.student.photo;
      classroom = this.student.classroom;
      const studentImageRef = this.storage.ref(this.student.photo);
      studentImageRef.getDownloadURL().subscribe((url) => {
        this.imagesSrc = url;
      });
    }

    this.studentForm = new FormGroup({    
      'lastName'  : new FormControl(lastName),
      'firstName' : new FormControl(firstName),
      'birthDate' : new FormControl(birthDate),
      'birthPlace': new FormControl(birthPlace),
      'address'   : new FormControl(address),
      'city'      : new FormControl(city),
      'photo'     : new FormControl(photo),
      'classroom' : new FormControl(classroom)
    })
    this.imagesSrc = 'assets/img/clickHere.png'
  }
}
