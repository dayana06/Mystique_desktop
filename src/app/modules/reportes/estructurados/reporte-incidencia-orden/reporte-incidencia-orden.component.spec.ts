import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteIncidenciaOrdenComponent } from './reporte-incidencia-orden.component';

describe('ReporteIncidenciaOrdenComponent', () => {
  let component: ReporteIncidenciaOrdenComponent;
  let fixture: ComponentFixture<ReporteIncidenciaOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteIncidenciaOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteIncidenciaOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
