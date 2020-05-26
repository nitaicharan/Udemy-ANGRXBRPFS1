import { createAction, props } from "@ngrx/store";
import { RegisterRequestInterface as RegisterRequest } from '../model/register-request.model';
import { ActionType } from './actions.type';

export const registerAction = createAction(
    ActionType.REGISTER,
    props<{ request: RegisterRequest }>()
);