import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FeedModule } from '../shared/module/feed/feed.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';
import { GetUserProfileEffect } from './store/effects/get-profile.effect';
import { profileReducer } from './store/reducers';

const routes = [
  {
    path: 'profiles/:slug',
    component: ProfileComponent
  },
  {
    path: 'profiles/:slug/favorites',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('profile', profileReducer),
    FeedModule,
  ],
  declarations: [ProfileComponent],
  providers: [ProfileService]
})
export class ProfileModule { }
