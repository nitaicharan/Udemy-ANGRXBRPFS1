import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { PersistanceService } from 'src/app/shared/service/persistance.service';
import { AuthService } from '../../services/auth.service';
import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action copy';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction),
    switchMap(({ request }) => this.authService.register(request).pipe(
      tap(user => this.persistanceService.setToken(user.token)),
      map(user => registerSuccessAction({ user })),
      catchError((httpErrorResponse: HttpErrorResponse) => of(registerFailureAction({ errors: httpErrorResponse.error.errors }))),
    ),
    )
  ));

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
    ofType(registerSuccessAction),
    tap(() => this.router.navigateByUrl('/')),
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private persistanceService: PersistanceService
  ) { }
}
