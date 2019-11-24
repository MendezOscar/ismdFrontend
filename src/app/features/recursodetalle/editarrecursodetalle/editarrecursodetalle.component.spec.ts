import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarrecursodetalleComponent } from './editarrecursodetalle.component';

describe('EditarrecursodetalleComponent', () => {
  let component: EditarrecursodetalleComponent;
  let fixture: ComponentFixture<EditarrecursodetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarrecursodetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarrecursodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
