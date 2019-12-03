import { TestBed } from '@angular/core/testing';

import { CambioriesgosService } from './cambioriesgos.service';

describe('CambioriesgosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CambioriesgosService = TestBed.get(CambioriesgosService);
    expect(service).toBeTruthy();
  });
});
