import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Article } from 'src/app/shared/model/article.model';
import { ArticleService as SharedArticleService } from 'src/app/shared/service/article.service';
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from '../actions/getArticle.action';

@Injectable()
export class GetArticleEffect {
  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService,
  ) { }

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: Article) => {
            return getArticleSuccessAction({ article });
          }),

          catchError(() => {
            return of(getArticleFailureAction());
          })
        );
      })
    )
  );
}
