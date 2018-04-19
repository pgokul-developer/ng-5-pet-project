import {TestBed, inject} from '@angular/core/testing';

import {HandleError, HttpErrorHandlerService} from './http-error-handler.service';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {catchError, map} from 'rxjs/operators';
import {MessageService} from '../message/message.service';
import {ConsoleLoggerService} from '../logger/console-logger.service';
import {LoggerService} from '../logger/logger.service';

describe('HttpErrorHandlerService', () => {
  let messageSpy = jasmine.createSpyObj('MessageService', ['add']);
  let loggerSpy = jasmine.createSpyObj('LoggerService', ['logError']);

  /*beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpErrorHandlerService]
    });
  });

  it('should be created', inject([HttpErrorHandlerService], (service: HttpErrorHandlerService) => {
    expect(service).toBeTruthy();
  }));*/

  describe('unit tests', () => {
    let service: HttpErrorHandlerService;

    beforeEach(() => {
     service = new HttpErrorHandlerService(messageSpy, loggerSpy);
    });

    it('should return an Observable of the original object',
      () => {

        const httpErrorResponse = new HttpErrorResponse({
          error: 'error',
          headers: null,
          status: 500,
          statusText: 'Internal Server Error',
          url: 'http://error.com'
        });

        const result: string = 'result';
        let handleError: HandleError = service.createHandleError('TestHandler');
        let errorHandler = handleError('test operation', result);
        let handledResult: string = '';
        errorHandler(httpErrorResponse).subscribe(value => handledResult = value);
        expect(handledResult).toEqual(result);
      });
  });

});
