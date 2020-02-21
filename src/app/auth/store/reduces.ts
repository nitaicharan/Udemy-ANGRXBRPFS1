import { Action, createReducer, on } from '@ngrx/store';
import { AuthState } from "../model/auth-state.model";
import { registerAction, registerSuccessAction, registerFailureAction } from './action/register.action';

const initialState: AuthState = {
    isSubmitting: false,
    currentUser: undefined,
    validationErrors: undefined,
    isLoggedIn: undefined,
}

export const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state): AuthState => ({
            ...state,
            isSubmitting: true,
            validationErrors: undefined,
        })
    ),
    on(
        registerSuccessAction,
        (state, action) => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser,
        })
    ),
    on(
        registerFailureAction,
        (state, action) => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors,
        })
    )
);