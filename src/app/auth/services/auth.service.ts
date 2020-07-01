import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInput } from 'src/app/shared/model/user-input.model';
import { User } from 'src/app/shared/model/user.model';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../models/auth-response.model';
import { LoginRequest } from '../models/login-request.model';
import { RegisterRequest } from '../models/register-request.model';


@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  register(data: RegisterRequest): Observable<User> {
    return this.httpClient
      .post<AuthResponse>(`${environment.apiUrl}/users`, data)
      .pipe(map((response: AuthResponse) => response.user));
  }

  login(data: LoginRequest): Observable<User> {
    return this.httpClient
      .post<AuthResponse>(`${environment.apiUrl}/users/login`, data)
      .pipe(map(this.extractUser));
  }

  extractUser(response: AuthResponse): User {
    return response.user;
  }

  getUser() {
    const url = `${environment.apiUrl}/user`;
    return this.httpClient.get(url).pipe(map(this.extractUser));
  }

  updateUser(data: UserInput): Observable<User> {
    const url = environment.apiUrl + '/user';
    return this.httpClient.put(url, data).pipe(map(this.extractUser));
  }
}
