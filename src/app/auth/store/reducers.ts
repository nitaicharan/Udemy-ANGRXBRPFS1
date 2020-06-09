import { Action, createReducer, on } from '@ngrx/store'
import { loginAction, loginFailureAction, loginSuccessAction } from 'src/app/auth/store/actions/login.action'
import { registerAction, registerFailureAction, registerSuccessAction } from 'src/app/auth/store/actions/register.action'
import { AuthState } from './auth.state'


const initialState: AuthState = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
}

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
      currentUser: action.currentUser
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
      currentUser: action.currentUser
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
);

// export function reducers(state: AuthState, action: Action) {
//   return authReducer(state, action)
// }
