import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarrecursocambioComponent } from './editarrecursocambio.component';

describe('EditarrecursocambioComponent', () => {
  let component: EditarrecursocambioComponent;
  let fixture: ComponentFixture<EditarrecursocambioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarrecursocambioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarrecursocambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
