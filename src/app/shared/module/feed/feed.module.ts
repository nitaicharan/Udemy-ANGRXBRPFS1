import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed.service';
import { FeedEffect } from './store/feed.effect';
import { StoreModule } from '@ngrx/store';
import { feedReducer } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('feed', feedReducer),
    EffectsModule.forFeature([FeedEffect]),
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule { }
