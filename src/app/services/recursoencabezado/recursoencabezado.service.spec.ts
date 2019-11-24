import { TestBed } from '@angular/core/testing';

import { RecursoencabezadoService } from './recursoencabezado.service';

describe('RecursoencabezadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecursoencabezadoService = TestBed.get(RecursoencabezadoService);
    expect(service).toBeTruthy();
  });
});
