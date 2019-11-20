import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloentregaComponent } from './modeloentrega.component';

describe('ModeloentregaComponent', () => {
  let component: ModeloentregaComponent;
  let fixture: ComponentFixture<ModeloentregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloentregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
