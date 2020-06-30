import { BackendErrors } from 'src/app/shared/model/backend-errors.model';

export interface CreateArticleState {
  isSubmitting: boolean;
  validationErrors: BackendErrors;
}
