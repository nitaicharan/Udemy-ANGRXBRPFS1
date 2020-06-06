import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../app.state';
import { LoginState } from '../states/login.state';

export const loginFeatureSelector = createFeatureSelector<AuthState, LoginState>('login');

export const isSubmittingSelector = createSelector(
    loginFeatureSelector,
    loginState => loginState.isSubmitting
);

export const validationErrorsSelector = createSelector(
    loginFeatureSelector,
    loginState => loginState.validationErrors,
);