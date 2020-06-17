import { createAction, props } from '@ngrx/store';
import { Profile } from '../../model/profile';
import { ActionTypes } from '../types';

export const getUserProfileAction = createAction(
  ActionTypes.GET_USER_PROFILE,
  props<{ slug: string }>()
);

export const getUserProfileSuccessAction = createAction(
  ActionTypes.GET_USER_PROFILE_SUCCESS,
  props<{ profile: Profile }>()
);

export const getUserProfileFailureAction = createAction(
  ActionTypes.GET_USER_PROFILE_FAILURE
);
