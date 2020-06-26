import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorMessageModule } from '../error-message/errorMessage.module';
import { LoadingModule } from '../loading/loading.module';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { GetPopularTagsEffect } from './store/get-popular-tags.effect';
import { popularTagsReducer } from './store/reducers';
import { PopularTagsService } from '../../service/popular-tags.service';

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    StoreModule.forFeature('popularTags', popularTagsReducer),
    EffectsModule.forFeature([GetPopularTagsEffect]),
  ],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule { }
