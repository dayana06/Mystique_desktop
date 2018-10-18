import { TestBed, inject } from '@angular/core/testing';

import { TipoRespSolicitudService } from './tipo-resp-solicitud.service';

describe('TipoRespSolicitudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoRespSolicitudService]
    });
  });

  it('should be created', inject([TipoRespSolicitudService], (service: TipoRespSolicitudService) => {
    expect(service).toBeTruthy();
  }));
});
