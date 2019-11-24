import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoencabezadoComponent } from './recursoencabezado.component';

describe('RecursoencabezadoComponent', () => {
  let component: RecursoencabezadoComponent;
  let fixture: ComponentFixture<RecursoencabezadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursoencabezadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursoencabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
