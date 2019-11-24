import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearproveedorComponent } from './crearproveedor.component';

describe('CrearproveedorComponent', () => {
  let component: CrearproveedorComponent;
  let fixture: ComponentFixture<CrearproveedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearproveedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
