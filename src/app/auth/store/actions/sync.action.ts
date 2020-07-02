import { createAction } from '@ngrx/store';
import { LoginType } from '../types/login.type';

export const logoutAction = createAction(LoginType.LOGOUT);
