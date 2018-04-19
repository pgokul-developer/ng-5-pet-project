import { TestBed, inject } from '@angular/core/testing';
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';

xdescribe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, HttpClientTestingModule]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  describe('unit tests', () => {

    describe('isAuthenticated property', () => {

      it('should not be authenticated initially', inject([AuthService], (service: AuthService) => {
        expect(service.isAuthenticated).toBeFalsy();
      }));

      it('should be authenticated after setting authenticated as true', inject([AuthService], (service: AuthService) => {
        service.isAuthenticated = true;
        expect(service.isAuthenticated).toBeTruthy();
      }));
    });

    describe('performLogin method', () => {

      it('should not be authenticated and auth token should be null initially', inject([AuthService], (service: AuthService) => {
        expect(service.isAuthenticated).toBeFalsy('isAuthenticated is Truthy');
        expect(service.jwtToken).toBeNull('auth token is not null');
      }));

      it('after failed login, should not be authenticated and auth token should be null', inject([AuthService], (service: AuthService) => {
        // Deliberately make test fail initially as not yet implemented
        service.isAuthenticated = true;
        expect(service.isAuthenticated).toBeFalsy('isAuthenticated is Truthy');
        expect(service.jwtToken).toBeNull('auth token is not null');
      }));

      it('after successful login, should not be authenticated and auth token should be null', inject([AuthService], (service: AuthService) => {
        expect(service.isAuthenticated).toBeTruthy('isAuthenticated is Falsey');
        expect(service.jwtToken).toBeTruthy('auth token is null');
      }));
    });
  });

  describe('integration tests', () => {

  });

});
