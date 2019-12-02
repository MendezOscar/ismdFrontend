import { TestBed } from '@angular/core/testing';

import { IncidenteService } from './incidente.service';

describe('IncidenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IncidenteService = TestBed.get(IncidenteService);
    expect(service).toBeTruthy();
  });
});
