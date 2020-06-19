import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { ArticleInput } from 'src/app/shared/model/article-input.model';
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';
import { getArticleAction } from '../../store/actions/get-article.action';
import { updateArticleAction } from '../../store/actions/update-article.action';
import { articleSelector, isLoadingSelector, isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent {
  values$: Observable<ArticleInput>;
  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  backendErrors$: Observable<BackendErrors>;
  slug: string;

  constructor(private store: Store, private route: ActivatedRoute) {
    this.slug = this.route.snapshot.params.slug;

    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.backendErrors$ = this.store.select(validationErrorsSelector);

    this.store.dispatch(getArticleAction({ slug: this.slug }));

    this.values$ = this.store.select(articleSelector).pipe(
      first(),
      map((article: ArticleInput) => ({ ...article })),
    );
  }

  onSubmit(articleInput: ArticleInput): void {
    console.log('onSubmit', articleInput);
    this.store.dispatch(updateArticleAction({ slug: this.slug, articleInput }));
  }
}
