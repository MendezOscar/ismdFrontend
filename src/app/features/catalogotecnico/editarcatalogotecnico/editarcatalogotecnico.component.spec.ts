import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcatalogotecnicoComponent } from './editarcatalogotecnico.component';

describe('EditarcatalogotecnicoComponent', () => {
  let component: EditarcatalogotecnicoComponent;
  let fixture: ComponentFixture<EditarcatalogotecnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarcatalogotecnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcatalogotecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
