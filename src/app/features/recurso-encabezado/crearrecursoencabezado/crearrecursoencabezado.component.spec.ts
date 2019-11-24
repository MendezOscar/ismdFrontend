import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearrecursoencabezadoComponent } from './crearrecursoencabezado.component';

describe('CrearrecursoencabezadoComponent', () => {
  let component: CrearrecursoencabezadoComponent;
  let fixture: ComponentFixture<CrearrecursoencabezadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearrecursoencabezadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearrecursoencabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
