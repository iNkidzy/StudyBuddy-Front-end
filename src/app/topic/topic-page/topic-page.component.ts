import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../Shared/Services/comment.service';
import {Observable} from 'rxjs';
import {Topic} from '../../Shared/Models/topic.model';
import {TopicService} from '../../Shared/Services/topic.service';


@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {
  topics$: Observable<Topic[]>;
  comment: Comment;
  id: 1;
  err: string;
  constructor(private route: ActivatedRoute,
              private commentService: CommentService,
              private topicService: TopicService) { }
  ngOnInit(): void {
    this.commentService.findById(1)
     .subscribe(comment => {this.comment = comment;
     });
    this.topics$ = this.topicService.getTopics();
  }

}
