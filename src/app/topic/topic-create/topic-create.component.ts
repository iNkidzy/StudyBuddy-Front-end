import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TopicService} from '../../Shared/Services/topic.service';
import {CourseService} from '../../Shared/Services/course.service';
import {Course} from '../../Shared/Models/course.model';

@Component({
  selector: 'app-topic-create',
  templateUrl: './topic-create.component.html',
  styleUrls: ['./topic-create.component.css']
})
export class TopicCreateComponent implements OnInit {
  courses: Course[];
  topicForm = new FormGroup({
    name: new FormControl(''),
    mainBody: new FormControl(''),
    courseId: new FormControl('')
  });
  constructor(private route: ActivatedRoute,
              private topicService: TopicService,
              private router: Router,
              private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getCourses()
      .subscribe(courses => {
        this.courses = courses;
      });
  }

  saveTopic(): void {
    const topic = this.topicForm.value;
    debugger
    this.topicService.create(topic)
      .subscribe(() => {
        this.router.navigateByUrl('/admin');
      });
  }
}
