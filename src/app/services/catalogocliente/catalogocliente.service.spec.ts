import { TestBed } from '@angular/core/testing';

import { CatalogoclienteService } from './catalogocliente.service';

describe('CatalogoclienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatalogoclienteService = TestBed.get(CatalogoclienteService);
    expect(service).toBeTruthy();
  });
});
