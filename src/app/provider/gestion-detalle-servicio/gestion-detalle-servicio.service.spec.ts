import { TestBed, inject } from '@angular/core/testing';

import { GestionDetalleServicioService } from './gestion-detalle-servicio.service';

describe('GestionDetalleServicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestionDetalleServicioService]
    });
  });

  it('should be created', inject([GestionDetalleServicioService], (service: GestionDetalleServicioService) => {
    expect(service).toBeTruthy();
  }));
});
