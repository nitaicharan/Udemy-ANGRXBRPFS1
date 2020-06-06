import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors/login.selector'
import { RegisterRequest } from '../../models/register-request.model'
import { registerAction } from '../../store/actions/register.action'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  isSubmitting = () => this.store.pipe(select(isSubmittingSelector));
  backendErrors = () => this.store.pipe(select(validationErrorsSelector));


  initializeForm(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    const request: RegisterRequest = { user: this.form.value };
    this.store.dispatch(registerAction({ request }));
  }
}
