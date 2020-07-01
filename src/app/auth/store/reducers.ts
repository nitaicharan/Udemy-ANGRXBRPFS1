import { createReducer, on } from '@ngrx/store';
import { loginAction, loginFailureAction, loginSuccessAction } from 'src/app/auth/store/actions/login.action';
import { registerAction, registerFailureAction, registerSuccessAction } from './actions/register.action copy';
import { getUserAction, getUserFailureAction, getUserSuccessAction, updateUserSuccessAction } from './actions/user.action';
import { AuthState } from './state';


const initialState: AuthState = {
  isSubmitting: false,
  isLoading: false,
  user: null,
  validationErrors: null,
};

export const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      user: action.user
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    loginAction,
    (state): AuthState => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      user: action.user
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    getUserAction,
    (state): AuthState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getUserSuccessAction,
    (state, action): AuthState => ({
      ...state,
      isLoading: false,
      user: action.user,
    })
  ),
  on(
    getUserFailureAction,
    (state, action): AuthState => ({
      ...state,
      isLoading: false,
      user: null,
    })
  ),
  on(
    updateUserSuccessAction,
    (state, action): AuthState => ({
      ...state,
      user: action.user,
    })
  ),
);
