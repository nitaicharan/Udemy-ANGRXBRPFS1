import { Action, createReducer, on } from '@ngrx/store';
import { getUserProfileAction, getUserProfileFailureAction, getUserProfileSuccessAction } from './acctions/get-profile.action';
import { ProfileState } from './state';

const initialState: ProfileState = {
  data: null,
  isLoading: false,
  error: null
};

export const profileReducer = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state): ProfileState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): ProfileState => ({
      ...state,
      isLoading: false,
      data: action.profile
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): ProfileState => ({
      ...state,
      isLoading: false
    })
  )
);
