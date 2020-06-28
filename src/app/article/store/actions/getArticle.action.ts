import { createAction, props } from '@ngrx/store';
import { Article } from 'src/app/shared/model/article.model';
import { ActionTypes } from '../types/action.types';

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: Article }>()
);

export const getArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
);
