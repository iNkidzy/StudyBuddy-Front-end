import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../Shared/Services/comment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
userType: string;
email: string;
  constructor() { }

  ngOnInit(): void {
    this.userType = 'user';
    this.email = 'email@email.com';
  }

}
