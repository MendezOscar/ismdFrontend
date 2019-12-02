import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpruebasComponent } from './crearpruebas.component';

describe('CrearpruebasComponent', () => {
  let component: CrearpruebasComponent;
  let fixture: ComponentFixture<CrearpruebasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearpruebasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearpruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
