import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Profile } from '../../model/profile';
import { ProfileService } from '../../services/profile.service';
import { getUserProfileAction, getUserProfileFailureAction, getUserProfileSuccessAction } from '../acctions/get-profile.action';


@Injectable()
export class GetUserProfileEffect {
  constructor(
    private actions$: Actions,
    private userProfileService: ProfileService,
  ) { }

  getUserProfile$ = createEffect(() => this.actions$.pipe(
    ofType(getUserProfileAction),
    switchMap(({ slug }) => this.userProfileService.getUserProfile(slug)),
    map(userProfile => getUserProfileSuccessAction({ profile: userProfile })),
    catchError(() => of(getUserProfileFailureAction()))
  ));
}
