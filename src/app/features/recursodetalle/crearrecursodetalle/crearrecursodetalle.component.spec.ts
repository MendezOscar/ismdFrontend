import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearrecursodetalleComponent } from './crearrecursodetalle.component';

describe('CrearrecursodetalleComponent', () => {
  let component: CrearrecursodetalleComponent;
  let fixture: ComponentFixture<CrearrecursodetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearrecursodetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearrecursodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
