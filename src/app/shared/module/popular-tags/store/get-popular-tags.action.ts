import { createAction, props } from '@ngrx/store';
import { Tag } from 'src/app/shared/model/tag.model';
import { GetPopularTagsTypes } from './get-popular-tags.types';

export const getPopularTagsAction = createAction(
  GetPopularTagsTypes.GET_POPULAR_TAGS,
);

export const getPopularTagsSuccessAction = createAction(
  GetPopularTagsTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ tags: Tag[] }>(),
);

export const getPopularTagsFailureAction = createAction(
  GetPopularTagsTypes.GET_POPULAR_TAGS_FAILURE,
);
