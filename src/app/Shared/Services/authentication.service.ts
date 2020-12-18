import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'})

export class AuthenticationService {
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(environment.apiUrl + 'token/', {username, password})
      .pipe(map(response => {
        const token = response.token;
        const id = response.id;
        const userType = response.role;
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({id, username, userType, token})); // somewhere here
          return response;
        } else {
          return false;
        }
      }));
  }

  getToken(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return currentUser.token;
    } else {
      return null;
    }
  }

  getUsername(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return currentUser.username;
    } else {
      return null;
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isAdmin(): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.userType === 'Admin';
  }
  isTeacher(): boolean{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.userType === 'Teacher';
  }
  isUser(): boolean{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.userType === 'User';
  }
}
