import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GetArticleEffect } from 'src/app/article/store/effects/getArticle.effect';
import { ArticleService as SharedArticleService } from '../shared/service/article.service';
import { articleReducer } from './store/reducers';


const routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', articleReducer),
    EffectsModule.forFeature([GetArticleEffect]),
  ],
  declarations: [],
  providers: [SharedArticleService]
})
export class ArticleModule { }
