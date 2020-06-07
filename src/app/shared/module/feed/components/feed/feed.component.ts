import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';
import { FeedResponse } from '../../models/feed-response.model';
import { feedAction } from '../../store/feed.action';
import { errorSelector, feedSelector, isLoadingSelector } from '../../store/feed.selector';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() url: string;
  feed$: Observable<FeedResponse>;
  error$: Observable<BackendErrors>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store) {  }

  ngOnInit(): void {
    this.store.dispatch(feedAction({ url: this.url }));

    this.feed$ = this.store.select(feedSelector);
    this.error$ = this.store.select(errorSelector);
    this.isLoading$ = this.store.select(isLoadingSelector);
  }
}
