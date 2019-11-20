import { TestBed } from '@angular/core/testing';

import { ModeloentregaService } from './modeloentrega.service';

describe('ModeloentregaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModeloentregaService = TestBed.get(ModeloentregaService);
    expect(service).toBeTruthy();
  });
});
