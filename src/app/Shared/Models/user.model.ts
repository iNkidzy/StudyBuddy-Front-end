import {Usertype} from './usertype.model';
import {Course} from './course.model';
import {Topic} from './topic.model';

export interface User{
  id?: number;
  userType: Usertype;
  name: string;
  email: string;
  username: string;
  password: string;
  courses: Course[];
  topics: Topic[];
}
