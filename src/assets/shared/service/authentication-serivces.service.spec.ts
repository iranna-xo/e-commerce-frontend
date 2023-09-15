import { TestBed } from '@angular/core/testing';

import { AuthenticationSerivcesService } from './authentication-serivces.service';

describe('AuthenticationSerivcesService', () => {
  let service: AuthenticationSerivcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationSerivcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
