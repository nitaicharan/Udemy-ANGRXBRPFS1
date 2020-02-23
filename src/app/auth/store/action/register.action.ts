import { createAction, props } from "@ngrx/store";
import { RegisterRequest as RegisterRequest } from '../../model/register-request.model';
import { ActionType } from '../actions.type';
import { CurrentUser } from 'src/app/shared/model/current-user.model';

export const registerAction = createAction(
    ActionType.REGISTER,
    props<{ request: RegisterRequest }>()
);

export const registerSuccessAction = createAction(
    ActionType.REGISTER_SUCCESS,
    props<{ currentUser: CurrentUser }>()
);

export const registerFailureAction = createAction(ActionType.REGISTER_FAILURE);