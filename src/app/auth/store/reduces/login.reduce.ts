import { createReducer, on, Action } from '@ngrx/store'
import { loginAction, loginSuccessAction } from '../actions/login.action';
import { loginFailureAction } from '../actions/login.action';
import { LoginState } from '../states/login.state';

const initialState: LoginState = {
    isSubmitting: false,
    currentUser: undefined,
    validationErrors: undefined,
    isLoggedIn: undefined,
}

export const loginReducer = createReducer(
    initialState,

    on(
        loginAction,
        (state): LoginState => ({
            ...state,
            ...state,
            isSubmitting: true,
            validationErrors: undefined,
        }),
    ),
    on(
        loginSuccessAction,
        (state, action): LoginState => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser,
        }),
    ),
    on(
        loginFailureAction,
        (state, action): LoginState => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors,
        }),
    )
);

export function loginReducers(state: LoginState, action: Action) {
    return loginReducer(state, action);
}