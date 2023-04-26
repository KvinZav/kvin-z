import { TestBed } from '@angular/core/testing';

import { KvinZService } from './kvin-z.service';

describe('KvinZService', () => {
  let service: KvinZService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KvinZService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
