import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'})

export class CommentService {
  constructor(private http: HttpClient) {
  }

// Create
  create(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>('https://localhost:63146/api/comment', comment);
  }

  // GetAllAdmins
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://localhost:63146/api/comment'); // check
    // add authorization header with jwt token
    //  httpOptions.headers =
    //   httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    // get users from api
    // return this.http.get<Comment[]>(environment.apiUrl + '/comment/', httpOptions);
  }

  // GetCats byID
  findById(id: number): Observable<Comment> {
    return this.http.get<Comment>('https://localhost:51961/api/comment/' + id);
  }

  // Delete by ID
  delete(id: number): Observable<Comment> {
    return this.http.delete<Comment>('https://localhost:51961/api/comment/' + id);
  }

  // Add Edit Comment Here:
  // Update by ID
  /*
  update(id: number, comment: Comment): Observable<Comment> {
    // return this.http.put<Comment>('environment.apiUrl + '/api/comment/'' + id);
    return this.http.put<Comment>(environment.apiUrl + '/api/comment/' + id, {
      name: comment.name,
      username: comment.username,
      email: comment.email,
    });
  }

   */
}
