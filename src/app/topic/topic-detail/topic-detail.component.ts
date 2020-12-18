import { Component, OnInit } from '@angular/core';
import {Topic} from '../../Shared/Models/topic.model';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TopicService} from '../../Shared/Services/topic.service';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {
  topic: Topic;
  id: number;
  topicForm = new FormGroup({
    name: new FormControl(''),
    mainBody: new FormControl('')
  });
  constructor(private route: ActivatedRoute,
              private topicService: TopicService,
              private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.topicService.findById(this.id)
      .subscribe(topic => {this.topic = topic;
        this.topicForm.patchValue({
          name: topic.name,
          mainBody: topic.mainBody
        });
      });
  }
  saveTopic(): void {
    const topic = this.topicForm.value;
    topic.id = this.id;
    this.topicService.update(this.id, topic)
      .subscribe(() => {
        this.router.navigateByUrl('/admin');
      });
  }
}
