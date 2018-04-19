import { Injectable } from '@angular/core';
import {MessageService} from '../message/message.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LoggerService} from '../logger/logger.service';
import {of} from 'rxjs/observable/of';


export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable()
export class HttpErrorHandlerService {

  constructor(private messageService: MessageService,
              private loggerService: LoggerService) { }


  createHandleError = (serviceName: string = '') =>
    <T>(operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);

  private handleError<T>(serviceName: string = '', operation: string = 'operation' , result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      this.loggerService.logError(error);

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
        `server returned code ${error.status} with body "${error.error}"`;

      this.messageService.add(`${serviceName}: ${operation} failed: ${message}`);

      return of(result);
    }
  }
}
