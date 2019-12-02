import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursocambioComponent } from './recursocambio.component';

describe('RecursocambioComponent', () => {
  let component: RecursocambioComponent;
  let fixture: ComponentFixture<RecursocambioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursocambioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursocambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
