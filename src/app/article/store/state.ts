import { Article } from 'src/app/shared/model/article.model';

export interface ArticleState {
  isLoading: boolean;
  error: string;
  data: Article;
}
