import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';
import { environment } from 'src/environments/environment';
import { FeedResponse } from '../../models/feed-response.model';
import { feedAction } from '../../store/feed.action';
import { errorSelector, feedSelector, isLoadingSelector } from '../../store/feed.selector';
import { parseUrl, stringify } from 'query-string';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input() url: string;
  feed$: Observable<FeedResponse>;
  error$: Observable<BackendErrors>;
  isLoading$: Observable<boolean>;
  queryParamsSubscription: Subscription;
  limit = environment.limit;
  baseUrl: string;
  page: number;

  constructor(
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.feed$ = this.store.select(feedSelector);
    this.error$ = this.store.select(errorSelector);
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.baseUrl = this.router.url.split('?')[0];

    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        const page = Number(params.page || '1');
        this.page = page;
        this.fetchFeed();
      }
    );
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  fetchFeed(): void {
    const offset = this.page * this.limit - this.limit;
    const parsedUrl = parseUrl(this.url);
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(feedAction({ url: apiUrlWithParams }));
  }
}
