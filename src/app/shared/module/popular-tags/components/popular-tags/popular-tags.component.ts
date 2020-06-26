import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Tag } from 'src/app/shared/model/tag.model';
import { getPopularTagsAction } from '../../store/get-popular-tags.action';
import { dataSelector, errorSelector, isLoadingSelector } from '../../store/get-popular-tags.selector';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent {
  popularTags$: Observable<Tag[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(getPopularTagsAction());
    this.popularTags$ = store.select(dataSelector);
    this.isLoading$ = store.select(isLoadingSelector);
    this.error$ = store.select(errorSelector);
  }
}
