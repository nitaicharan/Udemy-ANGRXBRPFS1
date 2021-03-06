import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { PersistanceService } from 'src/app/shared/service/persistance.service';
import { AuthService } from '../../services/auth.service';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    switchMap(
      ({ request }) => this.authService.login(request).pipe(
        tap(currentUser => this.persistanceService.setToken(currentUser.token)),
        map(currentUser => loginSuccessAction({ user: currentUser })),
        catchError((httpErrorResponse: HttpErrorResponse) => of(loginFailureAction({ errors: httpErrorResponse.error.errors }))),
      ),
    )
  ));

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccessAction),
    tap(() => this.router.navigateByUrl('/')),
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private persistanceService: PersistanceService
  ) { }
}
