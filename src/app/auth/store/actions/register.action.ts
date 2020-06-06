import { createAction, props } from "@ngrx/store";
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';
import { CurrentUser } from 'src/app/shared/model/current-user.model';
import { RegisterType } from '../types/register.type';
import { RegisterRequest } from '../../models/register-request.model';

export const registerAction = createAction(
    RegisterType.REGISTER,
    props<{ request: RegisterRequest }>()
);

export const registerSuccessAction = createAction(
    RegisterType.REGISTER_SUCCESS,
    props<{ currentUser: CurrentUser }>()
);

export const registerFailureAction = createAction(
    RegisterType.REGISTER_FAILURE,
    props<{ errors: BackendErrors }>()
);