import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {User} from '../../Models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userService.findById(currentUser.id)
      .subscribe(user => {this.user = user;
      });
  }

}
