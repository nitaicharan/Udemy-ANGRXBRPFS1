import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedModule } from '../shared/module/feed/feed.module';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { BannerModule } from '../shared/module/banner/banner.module';


const routes = [
  {
    path: '',
    component: GlobalFeedComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule
  ],
  declarations: [GlobalFeedComponent]
})
export class GlobalFeedModule { }
