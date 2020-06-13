import { createAction, props } from '@ngrx/store';
import { FeedType } from './feed.type';
import { FeedResponse } from '../models/feed-response.model';
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';

export const feedAction = createAction(
  FeedType.GET_FEED,
  props<{ url: string }>()
);

export const feedSuccessAction = createAction(
  FeedType.GET_FEED_SUCCESS,
  props<{ feed: FeedResponse }>()
);

export const feedFailureAction = createAction(
  FeedType.GET_FEED_FAILURE,
  props<{ error: BackendErrors }>()
);
