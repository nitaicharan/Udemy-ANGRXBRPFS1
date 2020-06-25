import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/app/auth/store/selectors/login.selector';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss']
})
export class FeedTogglerComponent {
  @Input() name: string;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store) {
    this.isLoggedIn$ = this.store.select(isLoggedInSelector);
  }
}
