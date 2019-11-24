import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcapacidadComponent } from './crearcapacidad.component';

describe('CrearcapacidadComponent', () => {
  let component: CrearcapacidadComponent;
  let fixture: ComponentFixture<CrearcapacidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearcapacidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearcapacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
