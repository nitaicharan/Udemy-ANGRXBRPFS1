import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { logoutAction } from 'src/app/auth/store/actions/sync.action';
import { PersistanceService } from 'src/app/shared/service/persistance.service';

@Injectable()
export class LogoutEffect {
  constructor(
    private actions$: Actions,
    private persistanceService: PersistanceService,
    private router: Router
  ) { }

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logoutAction),
    tap(() => {
      this.persistanceService.setToken('');
      this.router.navigateByUrl('/');
    })), { dispatch: false });
}
