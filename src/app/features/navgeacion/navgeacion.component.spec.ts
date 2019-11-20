import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavgeacionComponent } from './navgeacion.component';

describe('NavgeacionComponent', () => {
  let component: NavgeacionComponent;
  let fixture: ComponentFixture<NavgeacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavgeacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavgeacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
