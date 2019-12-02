import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarrequerimientoComponent } from './editarrequerimiento.component';

describe('EditarrequerimientoComponent', () => {
  let component: EditarrequerimientoComponent;
  let fixture: ComponentFixture<EditarrequerimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarrequerimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarrequerimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
