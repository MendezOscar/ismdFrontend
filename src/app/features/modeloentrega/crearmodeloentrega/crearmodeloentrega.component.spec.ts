import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearmodeloentregaComponent } from './crearmodeloentrega.component';

describe('CrearmodeloentregaComponent', () => {
  let component: CrearmodeloentregaComponent;
  let fixture: ComponentFixture<CrearmodeloentregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearmodeloentregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearmodeloentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
