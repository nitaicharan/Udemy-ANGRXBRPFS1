import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerModule } from '../shared/module/banner/banner.module';
import { FeedTogglerModule } from '../shared/module/feed-toggler/feed-toggler.module';
import { FeedModule } from '../shared/module/feed/feed.module';
import { PopularTagsModule } from '../shared/module/popular-tags/popular-tags.module';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';

const routes: Routes = [
  { path: 'tags/:slug', component: TagFeedComponent }
];


@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ]
})
export class TagFeedModule { }
