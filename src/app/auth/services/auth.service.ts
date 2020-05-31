import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { CurrentUser } from 'src/app/shared/model/current-user.model'
import { environment } from 'src/environments/environment'
import { AuthResponse } from '../model/auth-response.model'
import { RegisterRequestInterface } from '../model/register-request.model'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  register(data: RegisterRequestInterface): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users'
    return this.http
      .post<AuthResponse>(url, data)
      .pipe(map((response: AuthResponse) => response.user))
  }
}
