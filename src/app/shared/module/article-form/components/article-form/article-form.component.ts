import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticleInput } from 'src/app/shared/model/article-input.model';
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent {
  form: FormGroup;
  @Input() values: ArticleInput;
  @Input() isSubmitting: boolean;
  @Input() errors: BackendErrors;
  @Output() articleSubmit = new EventEmitter<ArticleInput>();
}
