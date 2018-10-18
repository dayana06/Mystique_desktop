import { TestBed, inject } from '@angular/core/testing';

import { VistaSolicitudService } from './vista-solicitud.service';

describe('VistaSolicitudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VistaSolicitudService]
    });
  });

  it('should be created', inject([VistaSolicitudService], (service: VistaSolicitudService) => {
    expect(service).toBeTruthy();
  }));
});
