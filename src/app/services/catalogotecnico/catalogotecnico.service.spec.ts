import { TestBed } from '@angular/core/testing';

import { CatalogotecnicoService } from './catalogotecnico.service';

describe('CatalogotecnicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatalogotecnicoService = TestBed.get(CatalogotecnicoService);
    expect(service).toBeTruthy();
  });
});
