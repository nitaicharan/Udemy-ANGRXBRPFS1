import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleFormModule } from '../shared/module/article-form/article-form.module';
import { CreateArticleComponent } from './components/createArticle/createArticle.component';

const routes: Routes = [
  { path: 'articles/new', component: CreateArticleComponent },
];

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
  ],
})
export class CreateArticleModule { }
