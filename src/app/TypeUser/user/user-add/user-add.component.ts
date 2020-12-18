import { Component, OnInit } from '@angular/core';
import {User} from '../../../Shared/Models/user.model';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../Shared/Services/user.service';
import {Usertype} from '../../../Shared/Models/usertype.model';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  types = Usertype;
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    type: new FormControl('')
  });
  typeKeys: string[];
  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) {
    this.typeKeys = Object.keys(this.types);
  }

  ngOnInit(): void {
  }

  saveUser(): void {
    const user = this.userForm.value;
    user.userType = this.types[user.type];
    this.userService.create(user)
      .subscribe(() => {
        this.router.navigateByUrl('/admin');
      });
  }
}
