import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleService as SharedArticleService } from 'src/app/shared/service/article.service';
import { ArticleFormModule } from '../shared/module/article-form/article-form.module';
import { LoadingModule } from '../shared/module/loading/loading.module';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { EditArticleService } from './services/edit-article.service';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { UpdateArticleEffect } from './store/effects/update-article.effect';
import { editArticleReducer } from './store/reducers';

const routes: Routes = [
  { path: 'articles/:slug/edit', component: EditArticleComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', editArticleReducer),
    LoadingModule,
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService]
})
export class EditArticleModule { }
