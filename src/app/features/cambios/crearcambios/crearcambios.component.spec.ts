import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcambiosComponent } from './crearcambios.component';

describe('CrearcambiosComponent', () => {
  let component: CrearcambiosComponent;
  let fixture: ComponentFixture<CrearcambiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearcambiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearcambiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
