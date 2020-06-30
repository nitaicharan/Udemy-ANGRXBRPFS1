import { createAction, props } from '@ngrx/store';
import { ArticleInput } from 'src/app/shared/model/article-input.model';
import { Article } from 'src/app/shared/model/article.model';
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';
import { ActionTypes } from '../types';

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleInput: ArticleInput }>()
);

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: Article }>()
);

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrors }>()
);
