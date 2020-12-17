import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Topic} from '../../Shared/Models/topic.model';
import {TopicService} from '../../Shared/Services/topic.service';
import {FormControl, FormGroup} from '@angular/forms';
import {CommentService} from '../../Shared/Services/comment.service';
import {User} from '../../Shared/Models/user.model';
import {UserService} from '../../Shared/Services/user.service';
import {Observable} from 'rxjs';
import {TopicComment} from '../../Shared/Models/topic-comment.model';
import {Usertype} from '../../Shared/Models/usertype.model';


@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {

  topicId: number;
  userId: number;
  user: User;
  topic: Topic;

  commentForm = new FormGroup({
    mainBody: new FormControl('')
    });
  loading: boolean;

  constructor(private route: ActivatedRoute,
              private topicService: TopicService,
              private commentService: CommentService,
              private userService: UserService) { }
  ngOnInit(): void {
    this.topicId = +this.route.snapshot.paramMap.get('id');
    this.userId = JSON.parse(localStorage.getItem('currentUser'))?.id;
    this.refresh();
  }
  saveComment(): void {
    const date = new Date();
    const comment: TopicComment = {
      mainBody: this.commentForm.get('mainBody').value,
      topicId: this.topic?.id,
      userId: this.user?.id,
      datePosted: date.toJSON()
    };
    this.loading = true;
    this.commentService.create(comment)
      .subscribe(() => {
        this.refresh();
        this.loading = false;
      }, error => {
        // save error and display
        this.loading = false;
      });
  }

  saveTopic(): void {
    if (this.user.topics == null){
      const topics: Topic[] = [];
      topics.push(this.topic);
      this.user.topics = topics; }
    else {
      this.user.topics.push(this.topic);
    }
    this.userService.update(this.user.id, this.user)
    .subscribe();
  }
  refresh(): void{
    this.userService.findById(this.userId)
      .subscribe(user => {this.user = user;
      });
    this.topicService.findById(this.topicId)
      .subscribe(topic => {this.topic = topic;
      });
  }
}
