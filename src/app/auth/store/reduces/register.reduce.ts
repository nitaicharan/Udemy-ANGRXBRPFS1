import { Action, createReducer, on } from '@ngrx/store';
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';
import { RegisterState } from '../states/register.state';

const initialState: RegisterState = {
    isSubmitting: false,
    currentUser: undefined,
    validationErrors: undefined,
    isLoggedIn: undefined,
}

export const registerReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state): RegisterState => ({
            ...state,
            isSubmitting: true,
            validationErrors: undefined,
        })
    ),
    on(
        registerSuccessAction,
        (state, action): RegisterState => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser,
        })
    ),
    on(
        registerFailureAction,
        (state, action): RegisterState => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors,
        })
    )
);

export function loginReducers(state: RegisterState, action: Action) {
    return registerReducer(state, action);
}