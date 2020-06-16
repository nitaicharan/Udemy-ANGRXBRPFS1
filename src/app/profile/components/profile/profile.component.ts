import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { userSelector } from 'src/app/auth/store/selectors/login.selector';
import { User } from 'src/app/shared/model/user.model';
import { Profile } from '../../model/profile';
import { getUserProfileAction } from '../../store/acctions/get-profile.action';
import { errorSelector, isLoadingSelector, userProfileSelector } from '../../store/selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profile: Profile;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  profileSubscription: Subscription;
  slug: string;
  isUserProfile$: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.slug = this.route.snapshot.params.slug;

    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);

    this.isUserProfile$ = combineLatest([
      this.store.select(userSelector).pipe(filter(Boolean)),
      this.store.select(userProfileSelector).pipe(filter(Boolean))
    ]).pipe(
      map(([currentUser, userProfile]: [User, Profile]) => currentUser.username === userProfile.username)
    );

    this.profileSubscription = this.store.select(userProfileSelector).subscribe(
      (userProfile: Profile) => this.profile = userProfile
    );

    this.route.params.subscribe((params: Params) => {
      this.slug = params.slug;
      this.store.dispatch(getUserProfileAction({ slug: this.slug }));
    });

  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites');
    return isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`;
  }
}
