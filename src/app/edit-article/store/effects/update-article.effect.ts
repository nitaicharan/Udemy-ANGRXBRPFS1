import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { EditArticleService } from '../../services/edit-article.service';
import { updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction } from '../actions/update-article.action';

@Injectable()
export class UpdateArticleEffect {
  constructor(
    private router: Router,
    private actions$: Actions,
    private editArticleService: EditArticleService,
  ) { }

  updateArticle$ = createEffect(() => this.actions$.pipe(
    ofType(updateArticleAction),
    switchMap(({ slug, articleInput }) => this.editArticleService.updateArticle(slug, articleInput)),
    map(article => updateArticleSuccessAction({ article })),
    catchError((errorResponse: HttpErrorResponse) => of(updateArticleFailureAction({ errors: errorResponse.error.errors })))
  ));

  redirectAfterUpdate$ = createEffect(() => this.actions$.pipe(
    ofType(updateArticleSuccessAction),
    tap(({ article }) => this.router.navigate(['/articles', article.slug]))
  ), { dispatch: false });
}
