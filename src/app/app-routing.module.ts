import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './student/student.component';
import {StudentListComponent} from './student/student-list/student-list.component';
import {StudentDetailsComponent} from './student/student-details/student-details.component';
import {ClassroomComponent} from './classroom/classroom.component';
import {AuthComponent} from './auth/auth.component';
import {AuthGuard} from './auth/auth.guard';



const appRoutes: Routes = [
  {path: '', redirectTo: '/students', pathMatch: 'full'},
  {path: 'students', component: StudentComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: StudentListComponent},
      {path: 'new', component: StudentDetailsComponent},
      {path: ':id', component: StudentDetailsComponent}
    ]},
  {path: 'classrooms', component: ClassroomComponent, canActivate: [AuthGuard]},
  {path: 'login', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
