import { createAction, props } from '@ngrx/store';
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';
import { User } from 'src/app/shared/model/user.model';
import { RegisterRequest } from '../../models/register-request.model';
import { RegisterType } from '../types/register.type';

export const registerAction = createAction(
  RegisterType.REGISTER,
  props<{ request: RegisterRequest }>()
);

export const registerSuccessAction = createAction(
  RegisterType.REGISTER_SUCCESS,
  props<{ user: User }>()
);

export const registerFailureAction = createAction(
  RegisterType.REGISTER_FAILURE,
  props<{ errors: BackendErrors }>()
);
