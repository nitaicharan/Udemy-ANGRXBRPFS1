import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { logoutAction } from 'src/app/auth/store/actions/sync.action';
import { updateUserAction } from 'src/app/auth/store/actions/user.action';
import { userSelector } from 'src/app/auth/store/selectors/login.selector';
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';
import { UserInput } from 'src/app/shared/model/user-input.model';
import { User } from 'src/app/shared/model/user.model';
import {
  isSubmittingSelector,
  validationErrorsSelector
} from '../../store/selectors';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnDestroy {
  form: FormGroup;
  user: User;
  userSubscription: Subscription;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrors>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));

    this.userSubscription = this.store.select(userSelector).pipe(
      filter(Boolean)
    ).subscribe((user: User) => {
      this.user = user;
      this.form = this.fb.group({
        image: this.user.image,
        username: this.user.username,
        bio: this.user.bio,
        email: this.user.email,
        password: ''
      });
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  submit(): void {
    const userInput: UserInput = { ...this.user, ...this.form.value };
    this.store.dispatch(updateUserAction({ userInput }));
  }

  logout = () => this.store.dispatch(logoutAction());
}
