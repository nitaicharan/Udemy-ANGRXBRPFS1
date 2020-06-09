import { Component, Input, OnInit } from '@angular/core'
import { BackendErrors } from 'src/app/shared/model/backend-errors.model'

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.components.scss']
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input() backendErrors: BackendErrors

  errorMessages: string[]

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map(
      (name: string) => {
        const messages = this.backendErrors[name].join(' ');
        return `${name} ${messages}`
      }
    );
  }
}
