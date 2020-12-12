import { Component, OnInit } from '@angular/core';
import {TopicService} from '../../Shared/Services/topic.service';
import {UserService} from '../../Shared/Services/user.service';
import {Observable} from 'rxjs';
import {User} from '../../Shared/Models/user.model';
import {Topic} from '../../Shared/Models/topic.model';
import {Usertype} from '../../Shared/Models/usertype.model';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {
 topics: Observable<Topic[]>;
  constructor(private topic: TopicService, private userType: UserService) { }

  ngOnInit(): void {

  }

}
