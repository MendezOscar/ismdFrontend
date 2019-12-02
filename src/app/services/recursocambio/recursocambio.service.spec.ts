import { TestBed } from '@angular/core/testing';

import { RecursocambioService } from './recursocambio.service';

describe('RecursocambioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecursocambioService = TestBed.get(RecursocambioService);
    expect(service).toBeTruthy();
  });
});
