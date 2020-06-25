import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerModule } from '../shared/module/banner/banner.module';
import { FeedModule } from '../shared/module/feed/feed.module';
import { PopularTagsModule } from '../shared/module/popular-tags/popular-tags.module';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { FeedTogglerModule } from '../shared/module/feed-toggler/feed-toggler.module';


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
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  declarations: [GlobalFeedComponent]
})
export class GlobalFeedModule { }
