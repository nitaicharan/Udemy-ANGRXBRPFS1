import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';
import { FeedResponse } from '../../models/feed-response.model';
import { feedAction } from '../../store/feed.action';
import { errorSelector, feedSelector, isLoadingSelector } from '../../store/feed.selector';

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
  baseUrl: string;
  queryParamsSubscription: Subscription;
  page: number;

  constructor(
    private store: Store,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(feedAction({ url: this.url }));

    this.feed$ = this.store.select(feedSelector);
    this.error$ = this.store.select(errorSelector);
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.baseUrl = this.router.url.split('?')[0];

    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        const page = Number(params.page || '1');
        this.page = page;
      }
    );
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }
}
