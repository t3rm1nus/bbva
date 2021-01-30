import { Injectable } from '@angular/core';
import * as fromAuthModels from './auth';
import { of, Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /********************************************************************************** */
  // This is a mock service, Don't use examples on this page in production code. Some APIs
  //  might be totally fake, and Some business logic usually handled on the server
  //   will be done on this page. This page is designed to give a back fake data.
  /********************************************************************************** */
  baseUrl: string = 'http://localhost:3000/users/';
  logged;

  constructor(private http: HttpClient, private router: Router) {
    this.logged = false;
  }
  //Fake Login API
  login(username: string, password: string): Observable<any> {
    return this.http.get(this.baseUrl + '?username=' + username).pipe(
      switchMap((users) => {
        let user = users[0];
        if (user) {
          this.logged = true;
          this.router.navigate(['/cuenta'])
          return of(user);
        } else {
          window.alert('Email or password are invalid');
          return throwError('Unable to login');
        }
      })
    );
  }
  
  isLoggedIn(): boolean {
    
    if(this.logged){
      return true
    }else{
      return false;
    }
  }
}