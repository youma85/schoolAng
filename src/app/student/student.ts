import {Classroom} from "../classroom/classroom";

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
