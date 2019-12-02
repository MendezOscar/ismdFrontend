import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearrecursocambioComponent } from './crearrecursocambio.component';

describe('CrearrecursocambioComponent', () => {
  let component: CrearrecursocambioComponent;
  let fixture: ComponentFixture<CrearrecursocambioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearrecursocambioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearrecursocambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
