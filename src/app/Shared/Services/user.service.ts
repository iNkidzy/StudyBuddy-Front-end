import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../Models/user.model';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'})

export class UserService {
  constructor(private http: HttpClient) {
  }

// Create
  create(user: User): Observable<User> {
    return this.http.post<User>( environment.apiUrl + 'user/', user);
  }

  // GetAllAdmins
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiUrl + 'user/'); // ('/users') // check
    // add authorization header with jwt token
    //  httpOptions.headers =
    //   httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    // get users from api
    // return this.http.get<User[]>(environment.apiUrl + '/users/', httpOptions);
  }

  // GetCats byID
  findById(id: number): Observable<User> {
    return this.http.get<User>(environment.apiUrl + 'user/' + id); // (`/users/${id}`)
  }

  findByIdButBetter(id: number): any {
    return this.http.get<User>(environment.apiUrl + 'user/' + id); // (`/users/${id}`)
  }

  // Delete by ID
  delete(id: number): Observable<User> {
    return this.http.delete<User>(environment.apiUrl + 'user/' + id);
  }

  update(id: number, user: User): Observable<User>{
    return this.http.put<User>(environment.apiUrl + 'user/' + id, user);
  }

  // Add Edit Users Here:
  // Update by ID
  /*
  update(id: number, user: User): Observable<User> {
    // return this.http.put<User>('environment.apiUrl + '/api/users/'' + id);
    return this.http.put<User>(environment.apiUrl + '/api/users/' + id, {
      name: admin.name,
      username: admin.username,
      email: admin.email,
    });
  }

   */
}
