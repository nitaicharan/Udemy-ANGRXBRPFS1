import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { BackendErrorMessagesModule } from '../shared/module/backendErrorMessages/backendErrorMessages.module';
import { PersistanceService } from '../shared/service/persistance.service';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { LoginEffect } from './store/effects/login.effect';
import { RegisterEffect } from './store/effects/register.effect';
import { UserEffect } from './store/effects/user.effect';
import { authReducer } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      UserEffect,
    ]),
    BackendErrorMessagesModule,
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
  ],
  providers: [
    AuthService,
    PersistanceService,
  ]
})
export class AuthModule { }
