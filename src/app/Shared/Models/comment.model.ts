import {User} from './user.model';
import {Topic} from './topic.model';

export interface Comment{
  id: number;
  name: string;
  user: User;
  topic: Topic;
  date: Date;
}
