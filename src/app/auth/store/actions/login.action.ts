import { createAction, props } from '@ngrx/store';
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';
import { CurrentUser } from 'src/app/shared/model/current-user.model';
import { LoginRequest } from '../../models/login-request.model';
import { LoginType } from '../types/login.type';

export const loginAction = createAction(
    LoginType.LOGIN,
    props<{ request: LoginRequest }>()
);

export const loginSuccessAction = createAction(
    LoginType.LOGIN_SUCCESS,
    props<{ currentUser: CurrentUser }>()
);

export const loginFailureAction = createAction(
    LoginType.LOGIN_FAILURE,
    props<{ errors: BackendErrors }>()
);