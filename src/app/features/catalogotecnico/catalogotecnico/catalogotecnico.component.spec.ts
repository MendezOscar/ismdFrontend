import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogotecnicoComponent } from './catalogotecnico.component';

describe('CatalogotecnicoComponent', () => {
  let component: CatalogotecnicoComponent;
  let fixture: ComponentFixture<CatalogotecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogotecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogotecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
