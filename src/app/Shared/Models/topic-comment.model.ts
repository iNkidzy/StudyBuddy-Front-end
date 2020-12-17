import {User} from './user.model';
import {Topic} from './topic.model';

export interface TopicComment{
  id?: number;
  mainBody?: string;
  datePosted?: string;
  user?: User;
  userId?: number;
  topic?: Topic;
  topicId?: number;
}
