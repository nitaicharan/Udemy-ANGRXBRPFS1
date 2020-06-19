import { createReducer, on } from '@ngrx/store';
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from 'src/app/article/store/actions/get-article.action';
import { updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction } from './actions/update-article.action';

const initialState = {
  isLoading: false,
  article: null,
  isSubmitting: false,
  validationErrors: null
};

export const editArticleReducer = createReducer(
  initialState,
  on(
    updateArticleAction,
    (state) => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    updateArticleSuccessAction,
    (state) => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    updateArticleFailureAction,
    (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    getArticleAction,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action) => ({
      ...state,
      isLoading: false,
      article: action.article
    })
  ),
  on(
    getArticleFailureAction,
    (state) => ({
      ...state,
      isLoading: false
    })
  )
);
