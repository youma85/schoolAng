import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface AuthResponseData {
  accessToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signUp(emailUsr: string, passwordUsr: string) {
    return this.http.post<AuthResponseData>('http://localhost:3000/register',
      {
        email: emailUsr,
        password: passwordUsr
      });
  }

  login(emailUsr: string, passwordUsr: string) {
    return this.http.post<AuthResponseData>('http://localhost:3000/login',
      {
        email: emailUsr,
        password: passwordUsr
      });
  }
}
