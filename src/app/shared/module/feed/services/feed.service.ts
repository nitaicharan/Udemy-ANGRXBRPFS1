import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FeedResponse } from '../models/feed-response.model';

@Injectable()
export class FeedService {
  constructor(private httpClient: HttpClient) { }

  feed(url: string) {
    const fullUrl = environment.apiUrl + url;
    return this.httpClient.get<FeedResponse>(fullUrl);
  }
}
