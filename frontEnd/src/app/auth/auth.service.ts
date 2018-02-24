import { Injectable } from '@angular/core';
import * as urljoin from 'url-join';
import { environment } from '../../environments/environment';
import {User} from "./user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import 'rxjs/add/observable/throw';
import {MatSnackBar} from "@angular/material";
import {isNullOrUndefined} from "util";

@Injectable()
export class AuthService {
  usersUrl: string;
  currentUser?: User;

  constructor(private http: HttpClient, private router: Router,
              public snackBar: MatSnackBar) {
    this.usersUrl = urljoin(environment.apiUrl, 'auth');
    if (this.isLoggedIn()) {
      const { userId, email, firstName, lastName } = JSON.parse(localStorage.getItem('user'));
      this.currentUser = new User(email, null, firstName, lastName, userId);
    }
  }
  signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(urljoin(this.usersUrl, 'signup'), body, { headers })
      .map((res) => {
      console.log('devolviendo'+JSON.stringify(res));
        this.login(res);
        return res;
      })
      .catch((error) => {
        console.log(error);
        return Observable.throw(error);
      });


  }

  signin(user: User) {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('voy a hacer signin, llamando login' + body);

    return this.http.post(urljoin(this.usersUrl, 'signin'), body, { headers })
      .map((res) => {
        this.login(res);
        return res;
      })
      .catch((error) => {
        console.log(error);
        return Observable.throw(error);
      });
  }

  login(res) {
    this.currentUser = new User(res.email, null, res.firstName, res.lastName, res.userId);
    // guardar session usuario, se guarda en el navegador
    localStorage.setItem('token', res.token);
    localStorage.setItem('user', JSON.stringify({ userId: res.userId,
      firstName: res.firstName, lastName: res.lastName, email: res.email }));
    this.router.navigateByUrl('/');
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
  logout() {
    localStorage.clear();
    this.currentUser = null;
    this.router.navigateByUrl('/signin');
  }
  showError( message ) {
    this.snackBar.open(message, 'x', {duration: 2500});
  }
  public handleError = (err: any) => {
    console.log(err);
    if (err.error) {
    const name = err.error.error.name;
    const message = err.error.message;
      if (name === 'TokenExpiredError') {
        this.showError('Tu sesión ha expirado');
      } else if (name === 'JsonWebTokenError') {
        this.showError('Ha habido un problema con tu sesión');
      } else {
        this.showError(message || 'Ha ocurrido un error. Inténtalo nuevamente');
      }
      this.logout();
   } else {
      this.showError(err.message);
    }
  }
}
