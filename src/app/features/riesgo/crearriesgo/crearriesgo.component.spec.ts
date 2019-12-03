import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearriesgoComponent } from './crearriesgo.component';

describe('CrearriesgoComponent', () => {
  let component: CrearriesgoComponent;
  let fixture: ComponentFixture<CrearriesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearriesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearriesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
