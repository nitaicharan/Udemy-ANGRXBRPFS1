import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ArticleInput } from 'src/app/shared/model/article-input.model';
import { ArticleResponse } from 'src/app/shared/model/article-response.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) { }

  createArticle(articleInput: ArticleInput) {
    const url = environment.apiUrl + '/articles';
    return this.http.post<ArticleResponse>(url, articleInput).pipe(map((response) => response.article));
  }
}
