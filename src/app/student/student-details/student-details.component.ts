import {Component, Input, OnInit} from '@angular/core';
import {Classroom} from "../../classroom/classroom";
import {Student} from "../student";
import {ClassroomService} from "../../services/classroom.service";
import {StudentService} from "../../services/student.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
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
  imageSrc: string;
  selectedImg: any;

  constructor(private classroomService: ClassroomService,
              private  studentService: StudentService,
              private route: ActivatedRoute,
              private router: Router,
              private angularStorage: AngularFireStorage) { }

  ngOnInit(): void {

    this.classrooms = this.classroomService.getClassrooms();
    this.route.params.subscribe((params: Params) => {   
    this.id = +params.id;
    this.editMode =  params.id != null;
    this.initForm();
      
    });
    
  }


  onImageUploaded(event: any) {
    if (event.target.files && event.target.files[0]) {
        const Reader = new FileReader();
        Reader.onload = (e: any) => this.imageSrc = e.target.result;
        Reader.readAsDataURL(event.target.files[0]);
        this.selectedImg = event.target.files[0];

    }
    else{
      this.imageSrc =  'assets/img/clickHereToUpload.jpeg';
      this.selectedImg = null;
    }
  }

  saveStudent() {

    this.student = this.studentForm.value;
    if (this.selectedImg) {
 
    }
    else{
      this.studentService.saveStudent(this.student);
      this.studentService.studentSelected.next(this.student);
      this.router.navigate(['/students']);
    }
  }

  initForm(){
    let lastName = '';
    let firstName = '';
    let birthDate  = '';
    let birthplace = '';
    let address = '';
    let city = '';
    let photo = '';
    let classroom = '';
    
    if (this.editMode){
      this.student = this.studentService.getStudent(this.id); 
      lastName = this.student.lastName;
      firstName = this.student.firstName;
      birthDate = this.student.birthDate;
      birthplace = this.student.birthplace;
      address = this.student.address;
      city = this.student.city;
      photo = this.student.photo;
      classroom = this.student.classroom;

      const ref = this.angularStorage.ref(this.student.photo);
      ref.getDownloadURL().subscribe((url)=>{
         this.imageSrc = url;
      })

    }

    this.studentForm = new FormGroup({
      'lastName' : new FormControl(lastName),
      'firstName' : new FormControl(firstName),
      'birthDate' : new FormControl(birthDate),
      'birthplace' : new FormControl(birthplace),
      'address' : new FormControl(address),
      'city' : new FormControl(city),
      'photo' : new FormControl(photo),
      'classroom' : new FormControl(classroom)
    })
    this.imageSrc = 'assets/img/clickHereToUpload.jpeg';
  }


}
