import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Course} from '../../Shared/Models/course.model';
import {CourseService} from '../../Shared/Services/course.service';
import {map, catchError} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {
  courseForm = new FormGroup({
    name: new FormControl()
  });
  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
   }
   saveCourse(): void{
    const course = this.courseForm.value;
     this.courseService.create(course)
       .subscribe(() => {
         this.router.navigateByUrl('/admin');
       });
  }
  }
