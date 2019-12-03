import { TestBed } from '@angular/core/testing';

import { CambiosService } from './cambios.service';

describe('CambiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CambiosService = TestBed.get(CambiosService);
    expect(service).toBeTruthy();
  });
});
