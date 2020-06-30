import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { CreateArticleState } from './state';

export const createArticleFeatureSelector = createFeatureSelector<AppState, CreateArticleState>('createArticle');

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  createArticleState => createArticleState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  createArticleState => createArticleState.validationErrors
)
