import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoclienteComponent } from './catalogocliente.component';

describe('CatalogoclienteComponent', () => {
  let component: CatalogoclienteComponent;
  let fixture: ComponentFixture<CatalogoclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
