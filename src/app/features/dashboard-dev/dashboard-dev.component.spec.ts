import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDevComponent } from './dashboard-dev.component';

describe('DashboardDevComponent', () => {
  let component: DashboardDevComponent;
  let fixture: ComponentFixture<DashboardDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
