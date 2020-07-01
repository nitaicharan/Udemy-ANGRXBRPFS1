import { User } from './user.model';

export interface UserInput extends User {
  password: string;
}
