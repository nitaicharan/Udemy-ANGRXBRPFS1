import { Action, createReducer, on } from '@ngrx/store';
import { AuthState } from "../model/auth-state.model";
import { registerAction } from './actions';

const initialState: AuthState = {
    isSubmitting: false
}

export const authReducer = createReducer(
    initialState,
    on(
        registerAction,
        (state): AuthState => ({
            ...state,
            isSubmitting: true
        })
    )
);