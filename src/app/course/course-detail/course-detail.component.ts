import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Course} from '../../Shared/Models/course.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../../Shared/Services/course.service';
import {catchError, switchMap, take} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
 course: Course;
 id: number;
courseForm = new FormGroup({
  name: new FormControl('')
});
  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService) {
  }

  ngOnInit(): void {
  this.id = +this.route.snapshot.paramMap.get('id');
  this.courseService.findById(this.id)
    .subscribe(course => { this.course = course;
    this.courseForm.patchValue({
      name: course.name
    });
    });
  }
  saveCourse(): void {
  const course = this.courseForm.value;
  course.id = this.id;
  this.courseService.updateCourse( this.id, course)
    .subscribe(() => {
    this.router.navigateByUrl('/admin');
  });
  }

}
