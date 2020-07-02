import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { LogoutEffect } from '../auth/store/effects/logout.effect';
import { BackendErrorModule } from '../shared/module/backend-error/backend-error.module';
import { SettingsComponent } from './components/settings/settings.component';
import { settingsReducers } from './store/reducers';

const routes = [
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', settingsReducers),
    BackendErrorModule,
    ReactiveFormsModule,
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
