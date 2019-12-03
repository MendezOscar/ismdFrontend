import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcambiosComponent } from './editarcambios.component';

describe('EditarcambiosComponent', () => {
  let component: EditarcambiosComponent;
  let fixture: ComponentFixture<EditarcambiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarcambiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcambiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
