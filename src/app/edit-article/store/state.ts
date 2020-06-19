import { Article } from 'src/app/shared/model/article.model';
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';

export interface EditArticleState {
  article: Article;
  isLoading: boolean;
  isSubmitting: boolean;
  validationErrors: BackendErrors;
}
