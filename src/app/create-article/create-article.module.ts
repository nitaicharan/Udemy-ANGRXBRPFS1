import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleFormModule } from '../shared/module/article-form/article-form.module';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { CreateArticleService } from './services/createArticle.service';
import { CreateArticleEffect } from './store/effects/create-article.effect';
import { createArticleReducer } from './store/reducers';

const routes: Routes = [
  { path: 'articles/new', component: CreateArticleComponent },
];

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('', createArticleReducer),
    EffectsModule.forFeature([CreateArticleEffect]),
    ArticleFormModule,
  ],
  providers: [CreateArticleService]
})
export class CreateArticleModule { }
