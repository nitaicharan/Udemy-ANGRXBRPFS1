import { Profile } from '../model/profile';

export interface ProfileState {
  data: Profile;
  isLoading: boolean;
  error: string;
}
