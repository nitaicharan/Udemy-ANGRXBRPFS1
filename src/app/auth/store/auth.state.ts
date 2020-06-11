import { BackendErrors } from 'src/app/shared/model/backend-errors.model';
import { User } from 'src/app/shared/model/user.model';

export interface AuthState {
  isSubmitting: boolean;
  isLoading:  boolean;
  user?: User;
  validationErrors?: BackendErrors;
}
