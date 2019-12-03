import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearrequerimientoComponent } from './crearrequerimiento.component';

describe('CrearrequerimientoComponent', () => {
  let component: CrearrequerimientoComponent;
  let fixture: ComponentFixture<CrearrequerimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearrequerimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearrequerimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
