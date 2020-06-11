import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, skipWhile, filter } from 'rxjs/operators';
import { PersistanceService } from 'src/app/shared/service/persistance.service';
import { AuthService } from '../../services/auth.service';
import { getUserFailureAction, getUserSuccessAction } from '../actions/user.action';

@Injectable()
export class UserEffect {

  getUser$ = createEffect(() => this.actions$.pipe(
    skipWhile(() => !Boolean(this.persistanceService.getToken())),
    switchMap(() => this.authService.getUser().pipe(
      map(user => getUserSuccessAction({ user })),
      catchError(() => of(getUserFailureAction()))
    )),
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
  ) { }
}
