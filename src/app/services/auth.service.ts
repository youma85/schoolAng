import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {User} from '../auth/user.model';

export interface AuthResponseData {
  accessToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new Subject<User>();

  constructor(private http: HttpClient) {
  }

  signUp(emailUsr: string, passwordUsr: string) {
    return this.http.post<AuthResponseData>('http://localhost:3000/register',
      {
        email: emailUsr,
        password: passwordUsr
      }).pipe(
      // do some actions without changing the response
      tap(resDat => {
        this.handleAuthenctication(emailUsr, resDat.accessToken);
      }));
  }

  login(emailUsr: string, passwordUsr: string) {
    return this.http.post<AuthResponseData>('http://localhost:3000/login',
      {
        email: emailUsr,
        password: passwordUsr
      }).pipe(
      // do some actions without changing the response
      tap(resDat => {
        this.handleAuthenctication(emailUsr, resDat.accessToken);
      }));
  }

  private handleAuthenctication(email: string, token: string) {
    const usr = new User(email, token);
    this.user.next(usr);
  }
}
