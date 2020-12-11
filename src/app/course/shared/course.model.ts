import {Topic} from '../../topic/ shared/topic.model';

export interface Course{
  id: number;
  name: string;
  topics: Topic[];
}
