import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { SettingsState } from './settings.state';

export const settingsFeatureSelector = createFeatureSelector<AppState, SettingsState>('settings');

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  settingsState => settingsState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  settingsState => settingsState.validationErrors
);
