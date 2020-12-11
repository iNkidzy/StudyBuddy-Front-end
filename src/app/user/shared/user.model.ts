import {Usertype} from './usertype.model';
import {Course} from '../../course/shared/course.model';
import {Topic} from '../../topic/ shared/topic.model';

export interface User{
  id: number;
  type: Usertype;
  name: string;
  email: string;
  courses: Course[];
  topics: Topic[];
}
