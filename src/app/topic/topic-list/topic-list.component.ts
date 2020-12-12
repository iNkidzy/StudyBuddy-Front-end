import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Course} from '../../Shared/Models/course.model';
import {CourseService} from '../../Shared/Services/course.service';
import {catchError, switchMap, take, tap} from 'rxjs/operators';
import {TopicService} from '../../Shared/Services/topic.service';
import {Topic} from '../../Shared/Models/topic.model';
import {isObservable} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
 topics$: Observable<Topic[]>;
 id: 1;
 err: string;

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.topics$ = this.topicService.getTopics();
  }
}
