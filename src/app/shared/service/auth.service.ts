import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private _isAuthenticated: boolean = false;

  public get isAuthenticated(): boolean  { return this._isAuthenticated; }

  public set isAuthenticated(value: boolean) { this._isAuthenticated = value; }

  constructor() { }

}
