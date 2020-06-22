import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ArticleService } from '../../services/article.service';
import { deleteArticleAction, deleteArticleFailureAction, deleteArticleSuccessAction } from '../actions/delete-article.action';


@Injectable()
export class DeleteArticleEffect {
  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private router: Router
  ) { }

  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => this.articleService.deleteArticle(slug)),
      map(() => deleteArticleSuccessAction()),
      catchError(() => of(deleteArticleFailureAction()))
    )
  );

  redirectAfterDelete$ = createEffect(
    () => this.actions$.pipe(
      ofType(deleteArticleSuccessAction),
      tap(() => this.router.navigate(['/']))
    ), { dispatch: false });
}
