import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {
  static AUTH_TOKEN = 'accessToken';
  private _token: string;

  setToken(token: string) {
    try {
      localStorage.setItem(PersistanceService.AUTH_TOKEN, JSON.stringify(token));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  getToken(): string {
    try {
      this._token = this._token ?? JSON.parse(localStorage.getItem(PersistanceService.AUTH_TOKEN));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
    }
    return this._token;
  }
}
