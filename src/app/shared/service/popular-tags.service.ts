import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Tag } from '../model/tag.model';
import { PopularTagsResponse } from '../module/popular-tags/models/popular-tags-response.model';

@Injectable()
export class PopularTagsService {
  constructor(private httpCliente: HttpClient) { }

  getPopularTags() {
    const url = environment.apiUrl + '/tags';

    return this.httpCliente.get<PopularTagsResponse>(url).pipe(map(resp => resp.tags));
  }
}
