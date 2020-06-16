import { routerNavigationAction } from '@ngrx/router-store';
import { createReducer, on } from '@ngrx/store';
import { feedAction, feedFailureAction, feedSuccessAction } from './feed.action';
import { FeedState } from './feed.state';

const initialState: FeedState = {
  isLoading: false,
  data: null,
  error: null,
};

export const feedReducer = createReducer(
  initialState,
  on(
    feedAction,
    (state): FeedState => ({
      ...state,
      isLoading: true,
    })),
  on(
    feedSuccessAction,
    (state, action): FeedState => ({
      ...state,
      isLoading: false,
      data: action.feed
    })
  ),
  on(
    feedFailureAction,
    (state, action): FeedState => ({
      ...state,
      isLoading: false,
      error: action.error
    })
  ),
  on(
    routerNavigationAction,
    () => initialState
  )
);
