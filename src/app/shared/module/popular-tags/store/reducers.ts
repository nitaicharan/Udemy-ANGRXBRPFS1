import { createReducer, on } from '@ngrx/store';
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from './get-popular-tags.action';
import { PopularTagsState } from './popular-tags.state';

const initialState: PopularTagsState = {
  data: null,
  isLoading: false,
  error: null,
};

export const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state) => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action) => ({
      ...state,
      isLoading: false,
      data: action.tags
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state) => ({
      ...state,
      isLoading: false,
    })
  ),
);
