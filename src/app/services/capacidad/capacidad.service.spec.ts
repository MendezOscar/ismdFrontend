import { TestBed } from '@angular/core/testing';

import { CapacidadService } from './capacidad.service';

describe('CapacidadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapacidadService = TestBed.get(CapacidadService);
    expect(service).toBeTruthy();
  });
});
