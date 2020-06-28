import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { AuthState } from '../state';

export const registerFeatureSelector = createFeatureSelector<AppState, AuthState>('auth');

export const isSubmittingSelector = createSelector(
  registerFeatureSelector,
  registerState => registerState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  registerFeatureSelector,
  registerState => registerState.validationErrors,
);
