import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarrecursoencabezadoComponent } from './editarrecursoencabezado.component';

describe('EditarrecursoencabezadoComponent', () => {
  let component: EditarrecursoencabezadoComponent;
  let fixture: ComponentFixture<EditarrecursoencabezadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarrecursoencabezadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarrecursoencabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
