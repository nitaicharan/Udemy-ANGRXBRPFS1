import { createAction, props } from '@ngrx/store';
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';
import { User } from 'src/app/shared/model/user.model';
import { LoginType } from '../types/login.type';
import { LoginRequest } from '../../models/login-request.model';

export const loginAction = createAction(
  LoginType.LOGIN,
  props<{ request: LoginRequest }>()
);

export const loginSuccessAction = createAction(
  LoginType.LOGIN_SUCCESS,
  props<{ user: User }>()
);

export const loginFailureAction = createAction(
  LoginType.LOGIN_FAILURE,
  props<{ errors: BackendErrors }>()
);
