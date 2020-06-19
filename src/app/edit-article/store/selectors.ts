import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { EditArticleState } from './state';

export const editArticleFeatureSelector = createFeatureSelector<AppState, EditArticleState>('editArticle');

export const articleSelector = createSelector(
  editArticleFeatureSelector,
  editArticleState => editArticleState.article
)

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  editArticleState => editArticleState.isLoading
)

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  editArticleState => editArticleState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  editArticleFeatureSelector,
  editArticleState =>
    editArticleState.validationErrors
)
