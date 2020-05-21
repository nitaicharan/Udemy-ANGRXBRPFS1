import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { RegisterComponent } from 'src/app/auth/components/register/register.component'
import { authReducer } from './store/reduces'


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
    StoreModule.forFeature('auth', authReducer),
    ReactiveFormsModule,
  ],
  declarations: [RegisterComponent]
})
export class AuthModule { }
