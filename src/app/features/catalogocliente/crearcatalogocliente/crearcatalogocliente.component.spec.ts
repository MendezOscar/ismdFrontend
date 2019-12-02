import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcatalogoclienteComponent } from './crearcatalogocliente.component';

describe('CrearcatalogoclienteComponent', () => {
  let component: CrearcatalogoclienteComponent;
  let fixture: ComponentFixture<CrearcatalogoclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearcatalogoclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearcatalogoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
