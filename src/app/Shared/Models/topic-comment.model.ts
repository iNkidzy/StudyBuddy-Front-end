import {User} from './user.model';
import {Topic} from './topic.model';

export interface TopicComment{
  id: number;
  name: string;
  mainBody: string;
  datePosted: Date;
  user: User;
  topic: Topic;
}
