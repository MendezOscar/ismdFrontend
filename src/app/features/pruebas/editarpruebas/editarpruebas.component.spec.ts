import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpruebasComponent } from './editarpruebas.component';

describe('EditarpruebasComponent', () => {
  let component: EditarpruebasComponent;
  let fixture: ComponentFixture<EditarpruebasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarpruebasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarpruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
