import { Component } from '@angular/core';

@Component({
  selector: 'app-create-article',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss']
})
export class CreateArticleComponent {
  values = {
    title: 'Foo',
    description: 'Bar',
    body: 'Baz',
    tagList: [''],
  };

  onSubmit = (res: any) =>  console.log(res);
}
