import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { getArticleAction } from 'src/app/article/store/actions/get-article.action';
import { articleSelector, errorSelector, isLoadingSelector } from 'src/app/article/store/selectors';
import { userSelector } from 'src/app/auth/store/selectors/login.selector';
import { Article } from 'src/app/shared/model/article.model';
import { deleteArticleAction } from '../../store/actions/delete-article.action';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnDestroy {
  slug: string;
  article: Article;
  articleSubscription: Subscription;
  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  isAuthor$: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute) {
    this.initializeValues();
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }

  deleteArticle = () => this.store.dispatch(deleteArticleAction({ slug: this.slug }));

  initializeValues(): void {
    this.slug = this.route.snapshot.params.slug;
    this.articleSubscription = this.store.select(articleSelector).subscribe(article => this.article = article);
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.store.dispatch(getArticleAction({ slug: this.slug }));

    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(userSelector))
    ]).pipe(
      map(
        ([article, user]) => {
          if (!article || !user) return false; // undefined === undefined (it need's return false)

          return user.username === article.author.username; // undefined === undefined (it would return true)
        }
      ),
    );
  }
}
