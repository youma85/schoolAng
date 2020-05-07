import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { StudentComponent } from './student/student.component';
import { ClassroomDialogComponent } from './classroom/classroom-dialog/classroom-dialog.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentItemComponent } from './student/student-item/student-item.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats, MatNativeDateModule} from '@angular/material/core';
import { ShadowDirective } from './utils/shadow.directive';
import { FirstcharcateruppercasePipe } from './utils/firstcharcateruppercase.pipe';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';

export const MY_FORMAT: MatDateFormats = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClassroomComponent,
    StudentComponent,
    ClassroomDialogComponent,
    StudentListComponent,
    StudentItemComponent,
    StudentDetailsComponent,
    ShadowDirective,
    FirstcharcateruppercasePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMAT }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
