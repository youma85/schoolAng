import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './student/student.component';
import {StudentListComponent} from './student/student-list/student-list.component';
import {StudentDetailsComponent} from './student/student-details/student-details.component';
import {ClassroomComponent} from './classroom/classroom.component';
import {AuthComponent} from './auth/auth.component';



const appRoutes: Routes = [
  {path: '', redirectTo: '/students', pathMatch: 'full'},
  {path: 'students', component: StudentComponent, children: [
      {path: '', component: StudentListComponent},
      {path: 'new', component: StudentDetailsComponent},
      {path: ':id', component: StudentDetailsComponent}
    ]},
  {path: 'classrooms', component: ClassroomComponent},
  {path: 'login', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
