import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, skipWhile, switchMap } from 'rxjs/operators';
import { PersistanceService } from 'src/app/shared/service/persistance.service';
import { AuthService } from '../../services/auth.service';
import { getUserAction, getUserFailureAction, getUserSuccessAction, updateUserAction, updateUserFailureAction, updateUserSuccessAction } from '../actions/user.action';

@Injectable()
export class UserEffect {

  getUser$ = createEffect(() => this.actions$.pipe(
    ofType(getUserAction),
    skipWhile(() => !Boolean(this.persistanceService.getToken())),
    switchMap(() => this.authService.getUser()),
    map(user => getUserSuccessAction({ user })),
    catchError(() => of(getUserFailureAction())),
  ));

  updateCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(updateUserAction),
    switchMap(({ userInput }) => this.authService.updateUser(userInput)),
    map(user => updateUserSuccessAction({ user })),
    catchError((errorResponse: HttpErrorResponse) => of(updateUserFailureAction({ errors: errorResponse.error.errors }))),
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) { }
}
