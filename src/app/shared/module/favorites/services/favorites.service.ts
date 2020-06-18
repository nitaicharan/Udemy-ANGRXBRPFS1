import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ArticleResponse } from 'src/app/shared/model/article-response.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class FavoritesService {
  constructor(private http: HttpClient) { }

  addToFavorites(slug: string) {
    const url = this.getUrl(slug);
    return this.http.post(url, {}).pipe(map(this.getArticle));
  }

  removeFromFavorites(slug: string) {
    const url = this.getUrl(slug);
    return this.http.delete(url).pipe(map(this.getArticle));
  }

  getUrl(slug: string) {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }

  getArticle(response: ArticleResponse) {
    return response.article;
  }
}
