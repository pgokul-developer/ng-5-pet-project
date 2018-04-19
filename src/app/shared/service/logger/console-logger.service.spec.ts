import { TestBed, inject } from '@angular/core/testing';

import { ConsoleLoggerService } from './console-logger.service';

describe('ConsoleLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsoleLoggerService]
    });
  });

  it('should be created', inject([ConsoleLoggerService], (service: ConsoleLoggerService) => {
    expect(service).toBeTruthy();
  }));

  describe('unit tests', () => {
    it('logging to console works', inject([ConsoleLoggerService], (service: ConsoleLoggerService) => {
      const info = 'info';
      const warn = 'warn';
      const error = 'error';

      spyOn(console, 'info');
      service.logInfo(info);
      expect(console.info).toHaveBeenCalledWith(info);

      spyOn(console, 'warn');
      service.logWarn(warn);
      expect(console.warn).toHaveBeenCalledWith(warn);

      spyOn(console, 'error');
      service.logError(error);
      expect(console.error).toHaveBeenCalledWith(error);

    }));
  });
});
