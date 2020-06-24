import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerModule } from '../shared/module/banner/banner.module';
import { FeedTogglerModule } from '../shared/module/feed-toggler/feed-toggler.module';
import { FeedModule } from '../shared/module/feed/feed.module';
import { PopularTagsModule } from '../shared/module/popular-tags/popular-tags.module';
import { YourFeedComponent } from './components/your-feed/your-feed.component';

const routes = [
  { path: 'feed', component: YourFeedComponent }
];

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ]
})
export class YourFeedModule { }
