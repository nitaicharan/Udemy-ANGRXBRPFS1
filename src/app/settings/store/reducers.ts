import { createReducer, on } from '@ngrx/store';
import { updateUserAction, updateUserFailureAction, updateUserSuccessAction } from 'src/app/auth/store/actions/user.action';
import { updateArticleSuccessAction } from 'src/app/edit-article/store/actions/update-article.action';
import { SettingsState } from './settings.state';

const initialState: SettingsState = {
  isSubmitting: false,
  validationErrors: null
};

export const settingsReducers = createReducer(
  initialState,
  on(
    updateUserAction,
    state => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    updateUserSuccessAction,
    state => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    updateUserFailureAction,
    (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
);
