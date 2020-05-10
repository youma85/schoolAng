import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {exhaustMap, take} from 'rxjs/operators';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {

        // for login and sign up request
        if (!user){
          return next.handle(req);
        }

        const httpOptions = {
          headers: new HttpHeaders({
            Authorization: `Bearer ${user.token}`
          })
        };
        const modifiedReq = req.clone(httpOptions);

        return next.handle(modifiedReq);
      }));
  }
}
