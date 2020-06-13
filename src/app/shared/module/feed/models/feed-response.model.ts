import { Article } from 'src/app/shared/model/article.model';

export interface FeedResponse {
  articles: Article[];
  articlesCount: number;
}
