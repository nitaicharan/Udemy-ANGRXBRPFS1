import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { LoginState } from '../states/login.state';

export const loginFeatureSelector = createFeatureSelector<AppState, LoginState>('auth');

export const isSubmittingSelector = createSelector(
  loginFeatureSelector,
  loginState => loginState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  loginFeatureSelector,
  loginState => loginState.validationErrors,
);
