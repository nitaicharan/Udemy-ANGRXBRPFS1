import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FavoritesService } from '../../services/favorites.service';
import { addToFavoritesAction, addToFavoritesFailureAction, addToFavoritesSuccessAction } from '../actions/favorites.action';


@Injectable()
export class AddToFavoritesEffect {
  constructor(
    private actions$: Actions,
    private favoritesService: FavoritesService,
  ) { }

  addToFavorites$ = createEffect(() => this.actions$.pipe(
    ofType(addToFavoritesAction),
    switchMap(({ isFavorited, slug }) => {
      if (isFavorited) return this.favoritesService.removeFromFavorites(slug);
      return this.favoritesService.addToFavorites(slug);
    }),
    map(article => addToFavoritesSuccessAction({ article })),
    catchError(() => of(addToFavoritesFailureAction()))
  ));
}
