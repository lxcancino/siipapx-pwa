import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { ConfigService } from 'app/config/config.service';

import { Authenticate } from '../models/authenticate';
import { AuthSession, readFromStore } from '../models/authSession';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  login(authenticate: Authenticate): Observable<any> {
    const url = this.config.buildApiUrl('login');
    return this.http
      .post<any>(url, authenticate)
      .pipe(catchError((error: any) => throwError(error)));
  }

  getToken(): string {
    if (this.session) {
      return this.session.access_token;
    }
    return null;
  }

  get session(): AuthSession {
    return readFromStore();
  }

  getSessionInfo(): Observable<any> {
    const url = this.config.buildApiUrl('session');
    return this.http
      .get<any>(url)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
