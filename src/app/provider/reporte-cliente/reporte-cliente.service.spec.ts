import { TestBed, inject } from '@angular/core/testing';

import { ReporteClienteService } from './reporte-cliente.service';

describe('ReporteClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReporteClienteService]
    });
  });

  it('should be created', inject([ReporteClienteService], (service: ReporteClienteService) => {
    expect(service).toBeTruthy();
  }));
});
