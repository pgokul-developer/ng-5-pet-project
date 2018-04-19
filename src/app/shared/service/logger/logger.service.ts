import { Injectable } from '@angular/core';

export abstract class Logger {

  info: any;
  warn: any;
  error: any;

  abstract logInfo(message: any): void;
  abstract logWarn(message: any): void;
  abstract logError(message: any): void;

}

@Injectable()
export class LoggerService implements Logger {

  info: any;
  warn: any;
  error: any;

  constructor() { }

  invokeConsoleMethod(type: string, args?: any): void {}

  logInfo(message: any): void {}

  logWarn(message: any): void {}

  logError(message: any): void {}
}
