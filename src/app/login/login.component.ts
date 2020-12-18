import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../Shared/Services/authentication.service';
import {User} from '../Shared/Models/user.model';
import {UserService} from '../Shared/Services/user.service';

import {Usertype} from '../Shared/Models/usertype.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  errormessage = '';
  user: User;
  constructor(private formBuilder: FormBuilder,
              private router: Router,

              private authenticationService: AuthenticationService,
              private userService: UserService) { }



  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authenticationService.logout();
  }
  // Getters for easy access to form fields
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }
  // get usernameAdmin() { return this.loginForm.get('Admin'); }
  // get passwordAdmin() { return this.loginForm.get('admin'); }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.username.value, this.password.value)
      .subscribe(
        success => {

          this.navigate();
          // somehow navigate to another page for admin AND .... Do if statements with routes

        },
        error => {
          this.errormessage = error.message;
          this.loading = false;
        });
  }
  navigate(): void{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser.userType === 'User'){
      this.router.navigate(['/dashboard']);
    }
    if (currentUser.userType === 'Admin'){
      this.router.navigate(['/admin']);
    }
    if (currentUser.userType === 'Teacher'){
      this.router.navigate(['/dashboard-teacher']);
    }

  }
}
