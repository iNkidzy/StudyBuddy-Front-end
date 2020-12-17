import { Component, OnInit } from '@angular/core';
import {User} from '../../../Shared/Models/user.model';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../Shared/Services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  types = [{id: 1, name: 'Admin'}, {id: 2, name: 'Teacher'}, {id: 3, name: 'User'}];
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    type: new FormControl('')
  });
  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }
  saveUser(): void {
    const user = this.userForm.value;
    debugger;
    this.userService.create(user)
      .subscribe(() => {
        this.router.navigateByUrl('/admin');
      });
  }
}
