import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursodetalleComponent } from './recursodetalle.component';

describe('RecursodetalleComponent', () => {
  let component: RecursodetalleComponent;
  let fixture: ComponentFixture<RecursodetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursodetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
