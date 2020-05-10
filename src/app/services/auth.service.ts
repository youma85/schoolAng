import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface AuthResponseData {
  accessToken:	string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(emailUsr: string, passwordUsr: string) {
    return this.http.post<AuthResponseData>('http://localhost:3000/register',
      {
        email: emailUsr,
        password: passwordUsr
      });
  }
}
