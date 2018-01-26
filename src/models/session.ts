import {Exercise} from './exercise';

export interface Session {
  id: number;
  name: string;
  exercises: Exercise[];
}
