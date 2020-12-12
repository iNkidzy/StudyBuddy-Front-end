import {Course} from './course.model';

export interface Topic{
  id: number;
  name: string;
  mainBody: string;
  course: Course;
  courseId: number;
  comment: Comment[];
}
