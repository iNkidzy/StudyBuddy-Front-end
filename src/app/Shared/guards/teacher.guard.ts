import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from '../Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) { }
  canActivate(): boolean{
    if (this.authService.isTeacher()) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page
    this.router.navigate(['/dashboard-teacher']);
    return false;
  }
}
