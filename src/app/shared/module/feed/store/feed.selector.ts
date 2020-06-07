import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { FeedState } from './feed.state';

export const feedFeatureSelector = createFeatureSelector<AppState, FeedState>('feed');

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  feedState => feedState.isLoading
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  feedState => feedState.error
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  feedState => feedState.data
);
