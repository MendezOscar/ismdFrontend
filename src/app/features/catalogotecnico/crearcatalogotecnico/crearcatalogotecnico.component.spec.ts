import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcatalogotecnicoComponent } from './crearcatalogotecnico.component';

describe('CrearcatalogotecnicoComponent', () => {
  let component: CrearcatalogotecnicoComponent;
  let fixture: ComponentFixture<CrearcatalogotecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearcatalogotecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearcatalogotecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
