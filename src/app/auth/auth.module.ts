import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { RegisterComponent } from 'src/app/auth/components/register/register.component'
import { authReducer } from './store/reduces'
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effect/register.effect'
import { AuthService } from './services/auth.service'
import { HttpClientModule } from '@angular/common/http'

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
    HttpClientModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([RegisterEffect]),
    ReactiveFormsModule,
  ],
  declarations: [RegisterComponent],
  providers: [AuthService]
})
export class AuthModule { }
