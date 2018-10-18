import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteIncidenciaServicioComponent } from './reporte-incidencia-servicio.component';

describe('ReporteIncidenciaServicioComponent', () => {
  let component: ReporteIncidenciaServicioComponent;
  let fixture: ComponentFixture<ReporteIncidenciaServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteIncidenciaServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteIncidenciaServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
