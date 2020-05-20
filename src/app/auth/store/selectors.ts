import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/shared/model/app-state.model';
import { AuthState } from '../model/auth-state.model';

export const authFeatureSelector = createFeatureSelector<AppState, AuthState>('auth');

export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    authState => authState.isSubmitting
);