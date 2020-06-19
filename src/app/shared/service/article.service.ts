import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ArticleResponse } from '../model/article-response.model';


@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) { }

  getArticle(slug: string) {
    const url = `${environment.apiUrl}/articles/${slug}`;

    return this.http.get<ArticleResponse>(url).pipe(map(response => response.article));
  }
}
