import { AuthState } from './auth/store/state';
import { FeedState } from './shared/module/feed/store/feed.state';
import { PopularTagsState } from './shared/module/popular-tags/store/popular-tags.state';
import { ArticleStateInterface } from './article/types/articleState.interface';

export interface AppState {
  auth: AuthState;
  feed: FeedState;
  popularTags: PopularTagsState;
  article: ArticleStateInterface;
}
