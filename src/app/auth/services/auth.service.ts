import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { CurrentUser } from 'src/app/shared/model/current-user.model'
import { environment } from 'src/environments/environment'
import { AuthResponse } from '../models/auth-response.model'
import { LoginRequest } from '../models/login-request.model'
import { RegisterRequest } from '../models/register-request.model'


@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  register(data: RegisterRequest): Observable<CurrentUser> {
    return this.http
      .post<AuthResponse>(`${environment.apiUrl}/users`, data)
      .pipe(map((response: AuthResponse) => response.user))
  }

  login(data: LoginRequest): Observable<CurrentUser> {
    return this.http
      .post<AuthResponse>(`${environment.apiUrl}/users/login`, data)
      .pipe(map(this.getUser))
  }

  getUser(response: AuthResponse): CurrentUser {
    return response.user
  }
}
