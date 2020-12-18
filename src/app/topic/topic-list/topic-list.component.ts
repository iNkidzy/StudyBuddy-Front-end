import { Component, OnInit } from '@angular/core';
import {Course} from '../../Shared/Models/course.model';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../Shared/Services/course.service';
import {Topic} from '../../Shared/Models/topic.model';
import {TopicService} from '../../Shared/Services/topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
 topics: Topic[];
 id: number;
 err: string;

  constructor(private route: ActivatedRoute, private courseService: CourseService,
              private topicService: TopicService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.topicService.getTopics()
      .subscribe(topics => {this.topics = topics;
      });
  }
}
