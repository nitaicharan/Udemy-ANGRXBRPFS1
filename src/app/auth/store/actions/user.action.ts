import { createAction, props } from '@ngrx/store';
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
