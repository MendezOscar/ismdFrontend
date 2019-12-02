import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarincidenteComponent } from './editarincidente.component';

describe('EditarincidenteComponent', () => {
  let component: EditarincidenteComponent;
  let fixture: ComponentFixture<EditarincidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarincidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarincidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
