import { CurrentUser } from 'src/app/shared/model/current-user.model';
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';

export interface RegisterState {
    isSubmitting: boolean;
    currentUser?: CurrentUser;
    isLoggedIn?: boolean;
    validationErrors?: BackendErrors;
}