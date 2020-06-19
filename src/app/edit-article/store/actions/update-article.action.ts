import { createAction, props } from '@ngrx/store';
import { ArticleInput } from 'src/app/shared/model/article-input.model';
import { Article } from 'src/app/shared/model/article.model';
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';
import { ActionTypes } from '../types';

export const updateArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{ slug: string; articleInput: ArticleInput }>()
);

export const updateArticleSuccessAction = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{ article: Article }>()
);

export const updateArticleFailureAction = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrors }>()
);
