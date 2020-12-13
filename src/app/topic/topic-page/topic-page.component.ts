import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Topic} from '../../Shared/Models/topic.model';
import {TopicService} from '../../Shared/Services/topic.service';


@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {
  topic: Topic;
  id: 1;
  err: string;
  constructor(private route: ActivatedRoute,
              private topicService: TopicService) { }
  ngOnInit(): void {
    this.topicService.findById(1)
     .subscribe(topic => {this.topic = topic;
     });
  }
}
