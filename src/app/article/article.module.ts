import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GetArticleEffect } from 'src/app/article/store/effects/get-article.effect';
import { ErrorMessageModule } from '../shared/module/error-message/errorMessage.module';
import { LoadingModule } from '../shared/module/loading/loading.module';
import { TagListModule } from '../shared/module/tag-list/tag-list.module';
import { ArticleService as SharedArticleService } from '../shared/service/article.service';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from './services/article.service';
import { articleReducer } from './store/reducers';


const routes: Routes = [
  { path: 'articles/:slug', component: ArticleComponent }
];

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', articleReducer),
    EffectsModule.forFeature([GetArticleEffect]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
  ],
  providers: [
    SharedArticleService,
    ArticleService,
  ]
})
export class ArticleModule { }
