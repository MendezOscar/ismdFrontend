import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarmodeloentregaComponent } from './editarmodeloentrega.component';

describe('EditarmodeloentregaComponent', () => {
  let component: EditarmodeloentregaComponent;
  let fixture: ComponentFixture<EditarmodeloentregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarmodeloentregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarmodeloentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
