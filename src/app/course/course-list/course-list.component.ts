import { Component, OnInit } from '@angular/core';
import {Course} from '../../Shared/Models/course.model';
import {CourseService} from '../../Shared/Services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[];
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses()
      .subscribe(
        courses => {
          this.courses = courses;
        });
  }
}
