import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosSuscripcionComponent } from './datos-suscripcion.component';

describe('DatosSuscripcionComponent', () => {
  let component: DatosSuscripcionComponent;
  let fixture: ComponentFixture<DatosSuscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosSuscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
