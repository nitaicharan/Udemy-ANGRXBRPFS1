import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { registerAction, registerSuccessAction, registerFailureAction } from '../action/register.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';

@Injectable()
export class RegisterEffect {
    register$ = createEffect(() => this.actions$.pipe(
        ofType(registerAction),
        switchMap(
            ({ request }) => this.authService.register(request).pipe(
                map(currentUser => registerSuccessAction({ currentUser })),
                catchError(() => of(registerFailureAction())),
            ),
        )
    ));

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) { }
}