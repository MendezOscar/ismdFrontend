import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcapacidadComponent } from './editarcapacidad.component';

describe('EditarcapacidadComponent', () => {
  let component: EditarcapacidadComponent;
  let fixture: ComponentFixture<EditarcapacidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarcapacidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcapacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
