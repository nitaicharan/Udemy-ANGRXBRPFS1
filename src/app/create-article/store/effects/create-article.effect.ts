import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { CreateArticleService } from '../../services/createArticle.service';
import { createArticleAction, createArticleFailureAction, createArticleSuccessAction } from '../actions/create-article.action';


@Injectable()
export class CreateArticleEffect {
  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router
  ) { }

  createArticle$ = createEffect(() => this.actions$.pipe(
    ofType(createArticleAction),
    switchMap(({ articleInput }) => this.createArticleService.createArticle(articleInput)),
    map(article => createArticleSuccessAction({ article })),
    catchError((httpErrorResponse: HttpErrorResponse) => of(createArticleFailureAction({ errors: httpErrorResponse.error.errors })))
  ));

  redirectAfterCreate$ = createEffect(() => this.actions$.pipe(
    ofType(createArticleSuccessAction),
    tap(({ article }) => this.router.navigate(['/articles', article.slug]))
  ), { dispatch: false });
}
