import { TestBed, inject } from '@angular/core/testing';

import { RespuestaSolicitudService } from './respuesta-solicitud.service';

describe('RespuestaSolicitudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RespuestaSolicitudService]
    });
  });

  it('should be created', inject([RespuestaSolicitudService], (service: RespuestaSolicitudService) => {
    expect(service).toBeTruthy();
  }));
});
