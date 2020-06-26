import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PopularTagsService } from 'src/app/shared/service/popular-tags.service';
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from './get-popular-tags.action';

@Injectable()
export class GetPopularTagsEffect {
  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService,
  ) { }

  getPopularTagsAction$ = createEffect(() => this.actions$.pipe(
    ofType(getPopularTagsAction),
    switchMap(() => this.popularTagsService.getPopularTags()),
    map(tags => getPopularTagsSuccessAction({ tags })),
    catchError((httpErrorResponse: HttpErrorResponse) => of(getPopularTagsFailureAction())),
  ));
}
