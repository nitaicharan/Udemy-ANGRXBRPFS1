import { AuthState } from './auth/store/state';
import { CreateArticleState } from './create-article/store/state';
import { EditArticleState } from './edit-article/store/state';
import { Article } from './shared/model/article.model';
import { FeedState } from './shared/module/feed/store/feed.state';
import { PopularTagsState } from './shared/module/popular-tags/store/popular-tags.state';

export interface AppState {
  auth: AuthState;
  feed: FeedState;
  popularTags: PopularTagsState;
  article: Article;
  createArticle: CreateArticleState;
  editArticle: EditArticleState;
}
