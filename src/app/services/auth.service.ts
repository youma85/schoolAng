import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {User} from '../auth/user.model';

export interface AuthResponseData {
  accessToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // subject: reactivly update the user interface
  // BehaviorSubject: like subject but it gave immediate access
  // to previous emitted values even we didn't subscribe at the point of time they was emitted
  // it takes default value in params
  user = new BehaviorSubject<User>(null);

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

  logout() {
    this.user.next(null);
    localStorage.removeItem('userData');
  }

  private handleAuthenctication(email: string, token: string) {
    const usr = new User(email, token);
    this.user.next(usr);
    // convert the usr to string and store it to localStorage
    localStorage.setItem('userData', JSON.stringify(usr));
  }

  autoLogin() {
    const userData: User = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    }

    this.user.next(userData);
  }
}
