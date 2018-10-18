import { TestBed, inject } from '@angular/core/testing';

import { ServicioSolicitadoService } from './servicio-solicitado.service';

describe('ServicioSolicitadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioSolicitadoService]
    });
  });

  it('should be created', inject([ServicioSolicitadoService], (service: ServicioSolicitadoService) => {
    expect(service).toBeTruthy();
  }));
});
