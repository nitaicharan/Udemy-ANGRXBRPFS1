import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { AuthState } from '../state';

export const loginFeatureSelector = createFeatureSelector<AppState, AuthState>('auth');

export const isSubmittingSelector = createSelector(
  loginFeatureSelector,
  loginState => loginState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  loginFeatureSelector,
  loginState => loginState.validationErrors,
);

export const isLoggedInSelector = createSelector(
  loginFeatureSelector,
  authState => !!authState.user
)

export const currentUserSelector = createSelector(
  loginFeatureSelector,
  authState => authState.user
)
