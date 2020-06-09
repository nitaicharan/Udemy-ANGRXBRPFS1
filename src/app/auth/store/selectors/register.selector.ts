import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { RegisterState } from '../states/register.state';

export const registerFeatureSelector = createFeatureSelector<AppState, RegisterState>('auth');

export const isSubmittingSelector = createSelector(
  registerFeatureSelector,
  registerState => registerState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  registerFeatureSelector,
  registerState => registerState.validationErrors,
);
