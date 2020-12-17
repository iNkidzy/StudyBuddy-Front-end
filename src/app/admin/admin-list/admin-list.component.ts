import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Admin} from '../shared/admin.model';
import {AdminService} from '../shared/admin.service';
import {UserService} from '../../Shared/Services/user.service';
import {TopicService} from '../../Shared/Services/topic.service';
import {CourseService} from '../../Shared/Services/course.service';
import {User} from '../../Shared/Models/user.model';
import {Topic} from '../../Shared/Models/topic.model';
import {Course} from '../../Shared/Models/course.model';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  users: User[];
  topics: Topic[];
  courses: Course[];
  constructor(private fb: FormBuilder, private userService: UserService,
              private topicService: TopicService, private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => {this.users = users;
      });
    this.topicService.getTopics()
      .subscribe(topics => {this.topics = topics;
      });
    this.courseService.getCourses()
      .subscribe(courses => {this.courses = courses;
      });
    }
    deleteUser(id: number): void {
    this.userService.delete(id)
      .subscribe();
    this.refresh();
    }
    updateUser(id: number): void {
    }
    deleteCourse(id: number): void {
    this.courseService.delete(id)
      .subscribe();
    this.refresh();
    }
    deleteTopic(id: number): void {
    this.topicService.delete(id)
      .subscribe();
    this.refresh();
    }

  refresh(): void{
    window.location.reload();
  }
}

