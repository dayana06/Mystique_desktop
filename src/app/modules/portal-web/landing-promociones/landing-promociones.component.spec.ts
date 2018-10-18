import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPromocionesComponent } from './landing-promociones.component';

describe('LandingPromocionesComponent', () => {
  let component: LandingPromocionesComponent;
  let fixture: ComponentFixture<LandingPromocionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPromocionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
