import { TestBed } from '@angular/core/testing';

import { ErrorservicService } from './errorservic.service';

describe('ErrorservicService', () => {
  let service: ErrorservicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorservicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
