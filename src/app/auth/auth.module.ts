import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { RegisterComponent } from 'src/app/auth/components/register/register.component'
import { BackendErrorMessagesModule } from '../shared/module/backendErrorMessages/backendErrorMessages.module'
import { AuthService } from './service/auth.service'
import { RegisterEffect } from './store/effect/register.effect'
import { authReducer } from './store/reduces'
import { PersistanceService } from '../shared/service/persistance.service'

const routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent],
  providers: [
    AuthService,
    PersistanceService,
  ]
})
export class AuthModule { }