import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcambioriesgosComponent } from './editarcambioriesgos.component';

describe('EditarcambioriesgosComponent', () => {
  let component: EditarcambioriesgosComponent;
  let fixture: ComponentFixture<EditarcambioriesgosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarcambioriesgosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcambioriesgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
