import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from 'src/app/article/store/actions/get-article.action';
import { ArticleService as SharedArticleService } from 'src/app/shared/service/article.service';

@Injectable()
export class GetArticleEffect {
  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService,
  ) { }

  getArticle$ = createEffect(() => this.actions$.pipe(
    ofType(getArticleAction),
    switchMap(({ slug }) => this.sharedArticleService.getArticle(slug)),
    map((article) => getArticleSuccessAction({ article })),
    catchError(() => of(getArticleFailureAction()))
  ));
}
