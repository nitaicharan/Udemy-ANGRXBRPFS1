import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { ProfileState } from './state';

export const profileFeatureSelector = createFeatureSelector<AppState, ProfileState>('profile');

export const userProfileSelector = createSelector(
  profileFeatureSelector,
  profile => profile.data
);

export const isLoadingSelector = createSelector(
  profileFeatureSelector,
  profile => profile.isLoading
);

export const errorSelector = createSelector(
  profileFeatureSelector,
  profile => profile.error
);
