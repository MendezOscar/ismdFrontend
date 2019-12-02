import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcatalogoclienteComponent } from './editarcatalogocliente.component';

describe('EditarcatalogoclienteComponent', () => {
  let component: EditarcatalogoclienteComponent;
  let fixture: ComponentFixture<EditarcatalogoclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarcatalogoclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcatalogoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
