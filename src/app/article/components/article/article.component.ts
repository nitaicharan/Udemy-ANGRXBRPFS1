import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { getArticleAction } from 'src/app/article/store/actions/getArticle.action';
import { articleSelector, errorSelector, isLoadingSelector } from 'src/app/article/store/selectors';
import { currentUserSelector } from 'src/app/auth/store/selectors/login.selector';
import { Article } from 'src/app/shared/model/article.model';

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
    this.slug = this.route.snapshot.params.slug;
    this.articleSubscription = this.store.select(articleSelector).subscribe(article => this.article = article);
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }


  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }

  initializeValues(): void {
    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))
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
