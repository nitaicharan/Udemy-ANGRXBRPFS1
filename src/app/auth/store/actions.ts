import { createAction, props } from "@ngrx/store";
import { ActionType } from './actions.type';

export const registerAction = createAction(
    ActionType.REGISTER,
    props<{ username: string, password: string, email: string }>()
);