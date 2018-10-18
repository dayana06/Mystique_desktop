import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDetalleComponent } from './registrar-detalle.component';

describe('RegistrarDetalleComponent', () => {
  let component: RegistrarDetalleComponent;
  let fixture: ComponentFixture<RegistrarDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
