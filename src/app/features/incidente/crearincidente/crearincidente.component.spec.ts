import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearincidenteComponent } from './crearincidente.component';

describe('CrearincidenteComponent', () => {
  let component: CrearincidenteComponent;
  let fixture: ComponentFixture<CrearincidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearincidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearincidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
