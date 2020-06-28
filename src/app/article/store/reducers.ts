import { routerNavigationAction } from '@ngrx/router-store';
import { createReducer, on } from '@ngrx/store';
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from 'src/app/article/store/actions/getArticle.action';
import { ArticleState } from './state';


const initialState: ArticleState = {
  data: null,
  isLoading: false,
  error: null
};

export const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): ArticleState => ({
      ...state,
      isLoading: false,
      data: action.article
    })
  ),
  on(
    getArticleFailureAction,
    (state): ArticleState => ({
      ...state,
      isLoading: false
    })
  ),
  on(routerNavigationAction, (): ArticleState => initialState)
);
