import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoPromocionComponent } from './historico-promocion.component';

describe('HistoricoPromocionComponent', () => {
  let component: HistoricoPromocionComponent;
  let fixture: ComponentFixture<HistoricoPromocionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoPromocionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoPromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
