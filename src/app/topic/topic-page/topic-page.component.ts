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

  user: User;
  topic: Topic;

  commentForm = new FormGroup({
    mainBody: new FormControl('')
    });

  constructor(private route: ActivatedRoute,
              private topicService: TopicService,
              private commentService: CommentService,
              private userService: UserService) { }
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userService.findById(currentUser.id)
      .subscribe(user => {this.user = user;
       });
    this.topicService.findById(id)
     .subscribe(topic => {this.topic = topic;
     });
  }
  saveComment(): void {
    const date = new Date();
    const comment: TopicComment = {
      mainBody: this.commentForm.value,
      topic: this.topic,
      user: this.user,
      datePosted: new Date(date.getFullYear(), date.getMonth(), date.getDate())
    };
    this.commentService.create(comment)
      .subscribe();
    this.topic.comments.push(comment);
    this.topicService.update(this.topic.id, this.topic);
    this.commentForm.reset();
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
    window.location.reload();
  }
}
