import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticleInput } from 'src/app/shared/model/article-input.model';
import { BackendErrors } from 'src/app/shared/model/backend-errors.model';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  form: FormGroup;
  @Input() values: ArticleInput;
  @Input() isSubmitting: boolean;
  @Input() errors: BackendErrors;
  @Output() article = new EventEmitter<ArticleInput>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.values.title,
      description: this.values.description,
      body: this.values.body,
      tagList: this.values.tagList.join(' ')
    });
  }

  onSubmit(): void {
    this.article.emit(this.form.value);
  }
}
