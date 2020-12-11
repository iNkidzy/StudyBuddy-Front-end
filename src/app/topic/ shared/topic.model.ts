import {Course} from '../../course/shared/course.model';

export interface Topic{
  id: number;
  name: string;
  mainBody: string;
  course: Course;
  comment: Comment[];
}
