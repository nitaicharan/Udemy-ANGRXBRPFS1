import { AuthState } from './auth/store/auth.state';
import { FeedState } from './shared/module/feed/store/feed.state';

export interface AppState {
  auth: AuthState;
  feed: FeedState;
}
