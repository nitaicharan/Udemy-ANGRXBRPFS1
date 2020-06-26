import { AuthState } from './auth/store/auth.state';
import { FeedState } from './shared/module/feed/store/feed.state';
import { PopularTagsState } from './shared/module/popular-tags/store/popular-tags.state';

export interface AppState {
  auth: AuthState;
  feed: FeedState;
  popularTags: PopularTagsState;
}
