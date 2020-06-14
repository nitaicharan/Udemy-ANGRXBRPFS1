import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: '<div>{{message}}</div>'
})
export class ErrorMessageComponent {
  @Input() message = 'Something went wrong';
}
