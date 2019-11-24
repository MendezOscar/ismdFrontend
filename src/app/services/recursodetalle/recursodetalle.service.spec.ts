import { TestBed } from '@angular/core/testing';

import { RecursodetalleService } from './recursodetalle.service';

describe('RecursodetalleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecursodetalleService = TestBed.get(RecursodetalleService);
    expect(service).toBeTruthy();
  });
});
