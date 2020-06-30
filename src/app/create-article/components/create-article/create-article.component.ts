import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isSubmittingSelector, validationErrorsSelector } from 'src/app/auth/store/selectors/login.selector';
import { ArticleInput } from 'src/app/shared/model/article-input.model';
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';
import { createArticleAction } from '../../store/actions/create-article.action';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent {
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrors>;

  constructor(private store: Store) {
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.backendErrors$ = this.store.select(validationErrorsSelector);
  }

  values = {
    title: '',
    description: '',
    body: '',
    tagList: [''],
  };

  onSubmit = (articleInput: ArticleInput) => this.store.dispatch(createArticleAction({ articleInput }));
}
