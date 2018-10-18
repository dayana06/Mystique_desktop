import { TestBed, inject } from '@angular/core/testing';

import { ReporteServicioService } from './reporte-servicio.service';

describe('ReporteServicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReporteServicioService]
    });
  });

  it('should be created', inject([ReporteServicioService], (service: ReporteServicioService) => {
    expect(service).toBeTruthy();
  }));
});
