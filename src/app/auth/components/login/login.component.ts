import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { loginAction } from 'src/app/auth/store/actions/login.action'
import { LoginRequest } from '../../models/login-request.model'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup

  constructor(private fb: FormBuilder, private store: Store) {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    const request: LoginRequest = {
      user: this.form.value
    }
    this.store.dispatch(loginAction({ request }))
  }

  get isSubmitting$() {
    return new Observable<null>();
  }

  get backendErrors$() {
    return new Observable<null>();
  }
}
