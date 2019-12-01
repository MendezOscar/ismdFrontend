import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDevComponent } from './navigation-dev.component';

describe('NavigationDevComponent', () => {
  let component: NavigationDevComponent;
  let fixture: ComponentFixture<NavigationDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
