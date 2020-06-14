import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackendErrorComponent } from './components/backend-error/backend-error.component';


@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorComponent],
  exports: [BackendErrorComponent]
})
export class BackendErrorModule { }
