import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RegisterState } from '../states/register.state';
import { AuthState } from '../app.state';

export const registerFeatureSelector = createFeatureSelector<AuthState, RegisterState>('register');

export const isSubmittingSelector = createSelector(
    registerFeatureSelector,
    registerState => registerState.isSubmitting
);

export const validationErrorsSelector = createSelector(
    registerFeatureSelector,
    registerState => registerState.validationErrors,
);