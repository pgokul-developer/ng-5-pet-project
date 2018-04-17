import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should not be authenticated initially', inject([AuthService], (service: AuthService) => {
    expect(service.isAuthenticated).toBeFalsy();
  }));

  it('should be authenticated after setting authenticated as true', inject([AuthService], (service: AuthService) => {
    service.isAuthenticated = true;
    expect(service.isAuthenticated).toBeTruthy();
  }));

});
