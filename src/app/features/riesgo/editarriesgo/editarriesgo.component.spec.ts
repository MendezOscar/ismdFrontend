import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarriesgoComponent } from './editarriesgo.component';

describe('EditarriesgoComponent', () => {
  let component: EditarriesgoComponent;
  let fixture: ComponentFixture<EditarriesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarriesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarriesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
