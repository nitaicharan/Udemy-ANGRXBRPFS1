import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendErrorModule } from '../backend-error/backend-error.module';
import { ArticleFormComponent } from './components/article-form/article-form.component';


@NgModule({
  declarations: [ArticleFormComponent],
  imports: [
    CommonModule,
    BackendErrorModule,
    ReactiveFormsModule
  ],
  exports: [ArticleFormComponent]
})
export class ArticleFormModule { }
