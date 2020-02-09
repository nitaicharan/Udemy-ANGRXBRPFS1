import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { RegisterRequest } from '../model/register-request.model'
import { CurrentUser } from 'src/app/shared/model/current-user.model'
import { environment } from 'src/environments/environment'
import { AuthResponse } from '../model/auth-response.model'


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  register(data: RegisterRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users'
    return this.http
      .post<AuthResponse>(url, data)
      .pipe(map((response: AuthResponse) => response.user))
  }
}
