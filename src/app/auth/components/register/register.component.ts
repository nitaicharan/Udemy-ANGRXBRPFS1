import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Store, select } from '@ngrx/store'
import { registerAction } from '../../store/actions'
import { Observable } from 'rxjs'
import { isSubmittingSelector } from '../../store/selectors'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  isSubmitting$() {
    return this.store.pipe(
      select(isSubmittingSelector)
    );
  }

  initializeForm(): void {
    console.log('initializeForm')
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid)
    this.store.dispatch(registerAction(this.form.value));
  }
}
