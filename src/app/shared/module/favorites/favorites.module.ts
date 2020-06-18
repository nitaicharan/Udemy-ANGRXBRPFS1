import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { FavoriteComponent } from './components/favorites/favorites.component';
import { FavoritesService } from './services/favorites.service';
import { AddToFavoritesEffect } from './store/effects/favorites.effect';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffect])],
  declarations: [FavoriteComponent],
  exports: [FavoriteComponent],
  providers: [FavoritesService]
})
export class FavoriteModule { }
