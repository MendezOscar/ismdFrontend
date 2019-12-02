import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcambioriesgosComponent } from './crearcambioriesgos.component';

describe('CrearcambioriesgosComponent', () => {
  let component: CrearcambioriesgosComponent;
  let fixture: ComponentFixture<CrearcambioriesgosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearcambioriesgosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearcambioriesgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
