import {User} from '../../user/shared/user.model';
import {Topic} from '../../topic/ shared/topic.model';

export interface Comment{
  id: number;
  name: string;
  user: User;
  topic: Topic;
  date: Date;
}
