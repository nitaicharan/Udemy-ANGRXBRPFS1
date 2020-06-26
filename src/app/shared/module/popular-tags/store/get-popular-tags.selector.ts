import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { PopularTagsState } from './popular-tags.state';

export const getPopularTagsSelector = createFeatureSelector<AppState, PopularTagsState>('popularTags');

export const dataSelector = createSelector(
  getPopularTagsSelector,
  popularTagsState => popularTagsState.data
);

export const isLoadingSelector = createSelector(
  getPopularTagsSelector,
  popularTagsState => popularTagsState.isLoading,
);

export const errorSelector = createSelector(
  getPopularTagsSelector,
  popularTagsState => popularTagsState.error,
);
