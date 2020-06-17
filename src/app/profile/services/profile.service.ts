import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProfileResponse } from '../model/profile-response.model';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) { }

  getUserProfile(slug: string) {
    const url = `${environment.apiUrl}/profiles/${slug}`;
    return this.http.get(url).pipe(map((response: ProfileResponse) => response.profile));
  }
}
