import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Course} from '../Models/course.model';
import {Topic} from '../Models/topic.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'})

export class CourseService {
  constructor(private http: HttpClient) {
  }

// Create
  create(course: Course): Observable<Course> {
    return this.http.post<Course>(environment.apiUrl + 'course/', course);
  }

  // GetAll
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(environment.apiUrl + 'course/'); // check
    // add authorization header with jwt token
    //  httpOptions.headers =
    //   httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    // get users from api
    // return this.http.get<Course[]>(environment.apiUrl + '/course/', httpOptions);
  }

  // GetCats byID
  findById(id: number): Observable<Course> {
    return this.http.get<Course>(environment.apiUrl + 'course/');
  }

  // Delete by ID
  delete(id: number): Observable<Course> {
    return this.http.delete<Course>(environment.apiUrl + 'course/' + id);
  }


  // Add Edit Teachers Here:
  // Update by ID
  /*
  update(id: number, course: Course): Observable<Course> {
    // return this.http.put<Course>('environment.apiUrl + '/api/course/'' + id);
    return this.http.put<Teacher>(environment.apiUrl + '/api/course/' + id, {
      name: course.name,
      username: course.username,
      email: course.email,
    });
  }
  */
  updateCourse(id: number, updatedCourse: Course): Observable<Course> {
    return this.http.put<Course>( 'https://studybuddy-exam.azurewebsites.net/api/course/' + id, updatedCourse);
  }
}
