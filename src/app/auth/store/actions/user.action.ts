import { createAction, props } from '@ngrx/store';
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';
import { UserInput } from 'src/app/shared/model/user-input.model';
import { User } from 'src/app/shared/model/user.model';
import { UserType } from '../types/user.type';

export const getUserAction = createAction(
  UserType.GET_USER,
);

export const getUserSuccessAction = createAction(
  UserType.GET_USER_SUCCESS,
  props<{ user: User }>()
);

export const getUserFailureAction = createAction(
  UserType.GET_USER_FAILURE,
);

export const updateUserAction = createAction(
  UserType.UPDATE_USER,
  props<{ userInput: UserInput }>()
);

export const updateUserSuccessAction = createAction(
  UserType.UPDATE_USER,
  props<{ user: User }>()
);

export const updateUserFailureAction = createAction(
  UserType.UPDATE_USER,
  props<{ errors: BackendErrors }>()
);
