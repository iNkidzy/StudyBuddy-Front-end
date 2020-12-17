import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';
import {User} from '../../Models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private userService: UserService) { }
currentUserType: string;
  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUserType = currentUser.type;
  }

}
