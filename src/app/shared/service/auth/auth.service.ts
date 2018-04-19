import { Injectable } from '@angular/core';
import {DOC_LOGIN, DOC_USERS, HEADER_AUTH, LOGIN_STATUS_SUCCESS, TASK_URL} from '../../constants/api.constants';
import {User} from '../../model/user';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {catchError, switchMap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {HandleError, HttpErrorHandlerService} from '../http-error-handler/http-error-handler.service';

@Injectable()
export class AuthService {
  private _isAuthenticated: boolean = false;
  get isAuthenticated(): boolean { return this._isAuthenticated; }
  set isAuthenticated(value: boolean) { this._isAuthenticated = value; }

  private _jwtToken: string = null;
  get jwtToken(): string { return this._jwtToken; }
  set jwtToken(value: string) { this._jwtToken = value; }

  private handleError: HandleError;

  constructor(public http: HttpClient,
              private httpErrorHandler: HttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('Auth Service');
  }

  public performLogin(user: User) {
    const url: string = `${TASK_URL}/${DOC_USERS}/${DOC_LOGIN}`;

    return this.http.post(url, user, {observe: 'response'}).pipe(
      switchMap(httpResponse => {
        this.extractJWTToken(httpResponse);
        return of(LOGIN_STATUS_SUCCESS);
      }),
      catchError(this.handleError('Login', []))
    )
  }

  private extractJWTToken(httpResponse: HttpResponse<Object>) {
    this.jwtToken = httpResponse.headers.get(HEADER_AUTH);
  }

}
