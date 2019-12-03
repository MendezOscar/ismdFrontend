import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioriesgosComponent } from './cambioriesgos.component';

describe('CambioriesgosComponent', () => {
  let component: CambioriesgosComponent;
  let fixture: ComponentFixture<CambioriesgosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioriesgosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioriesgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
