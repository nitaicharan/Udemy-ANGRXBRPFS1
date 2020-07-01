import { BackendErrors } from 'src/app/shared/model/backend-errors.model';

export interface SettingsState {
  isSubmitting: boolean;
  validationErrors: BackendErrors;
}
