import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FeedService } from '../services/feed.service';
import { feedAction, feedFailureAction, feedSuccessAction } from './feed.action';

@Injectable()
export class FeedEffect {
  constructor(
    private actions$: Actions,
    private feedService: FeedService,
  ) { }

  feedAction$ = createEffect(() => this.actions$.pipe(
    ofType(feedAction),
    switchMap(
      ({ url }) => this.feedService.feed(url).pipe(
        map(feed => feedSuccessAction({ feed })),
        catchError((httpErrorResponse: HttpErrorResponse) => of(feedFailureAction({ error: httpErrorResponse.error.errors }))),
      ),
    )
  ));
}
