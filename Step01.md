# Step 01

In this step I will create the overall design of the application 

**Create the Application** 

`ng new schoolApp`


**Add NgMaterial**

`ng add @angular/material`


**Add a navBar**

I will use the toolbar of angular material to create the navbar

`ng g c navbar`

use mat-toolbar component in the navbar

add MatToolbarModule & MatIconModule to the app.module


**Create needed components**

I will create the needed components for the app for example student and classroom

`ng g c classroom`

Get the angular material table example from : https://material.angular.io/components/table/overview

add MatTableModule to the app.module

`ng g c classroom\classroom-dialog`

add MatFormFieldModule, MatInputModule to the app.module

`ng g c student`

add MatGridListModule to the app.module

`ng g c student\student-list`

`ng g c student\student-item`

`ng g c student\student-details`

add MatDatepickerModule & MatSelectModule & MatNativeDateModule to the app.module 

**Create needed classes**

Create classroom class with this command:

`ng g class classroom\Classroom`

add the code bellow:

```
export class Classroom {
  constructor(public id?: number,
              public cycle?: string,
              public level?: string,
              public label?: string){}
}
```


Create student class with this command:

`ng g class student\Student`

add the code bellow:
```
import {Classroom} from './classroom'; 
 
 export class Student {
   constructor(public id?: number,
               public lastName?: string,
               public firstName?: string,
               public birthDate?: Date,
               public birthplace?: string,
               public address?: string,
               public city?: string,
               public photo?: string,
               public classroom?: Classroom) {
   }
 }
```


