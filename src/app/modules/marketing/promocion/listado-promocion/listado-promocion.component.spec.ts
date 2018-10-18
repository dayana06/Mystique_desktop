import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPromocionComponent } from './listado-promocion.component';

describe('ListadoPromocionComponent', () => {
  let component: ListadoPromocionComponent;
  let fixture: ComponentFixture<ListadoPromocionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPromocionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
