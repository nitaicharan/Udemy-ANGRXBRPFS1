import { BackendErrors } from 'src/app/shared/model/backend-errors.model';
import { CurrentUser } from 'src/app/shared/model/current-user.model';

export interface AuthState {
  isSubmitting: boolean;
  currentUser?: CurrentUser;
  validationErrors?: BackendErrors;
}
