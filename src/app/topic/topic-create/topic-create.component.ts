import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TopicService} from '../../Shared/Services/topic.service';

@Component({
  selector: 'app-topic-create',
  templateUrl: './topic-create.component.html',
  styleUrls: ['./topic-create.component.css']
})
export class TopicCreateComponent implements OnInit {

  topicForm = new FormGroup({
    name: new FormControl(''),
    mainBody: new FormControl('')
  });
  constructor(private route: ActivatedRoute,
              private topicService: TopicService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveTopic(): void {
    const topic = this.topicForm.value;
    this.topicService.create(topic)
      .subscribe(() => {
        this.router.navigateByUrl('/admin');
      });
  }
}
