import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../Shared/Services/comment.service';
import {UserService} from '../../Shared/Services/user.service';
import {CourseService} from '../../Shared/Services/course.service';
import {User} from '../../Shared/Models/user.model';
import {Course} from '../../Shared/Models/course.model';

@Component({
  selector: 'app-dashboard-teacher',
  templateUrl: './dashboard-teacher.component.html',
  styleUrls: ['./dashboard-teacher.component.css']
})
export class DashboardTeacherComponent implements OnInit {

  user: User;
  course: Course;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private courseService: CourseService) { }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userService.findById(currentUser.id)
      .subscribe(user => {this.user = user;
      });
    this.courseService.findById(1)
      .subscribe(course =>
      {this.course = course;
      });
  }

}
