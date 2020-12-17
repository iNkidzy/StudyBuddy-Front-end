import { Component, OnInit } from '@angular/core';
import {User} from '../../../Shared/Models/user.model';
import {UserService} from '../../../Shared/Services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Usertype} from '../../../Shared/Models/usertype.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  id: number;
  types = Usertype;
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    type: new FormControl('')
  });
  typeKeys: string[];
  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) {
    this.typeKeys = Object.keys(this.types);

  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userService.findById(this.id)
      .subscribe(user => {this.user = user;
                          this.userForm.patchValue({
                           name: user.name,
                            email: user.email,
                            type:  user.userType.toLowerCase()
      });
      });
   }
  saveUser(): void {
  const user = this.userForm.value;
  user.id = this.id;
  user.userType = this.types[user.type];
  this.userService.update(this.id, user)
    .subscribe(() => {
      this.router.navigateByUrl('/admin');
    });
  }

}
