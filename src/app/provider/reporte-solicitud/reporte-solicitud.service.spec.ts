import { TestBed, inject } from '@angular/core/testing';

import { ReporteSolicitudService } from './reporte-solicitud.service';

describe('ReporteSolicitudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReporteSolicitudService]
    });
  });

  it('should be created', inject([ReporteSolicitudService], (service: ReporteSolicitudService) => {
    expect(service).toBeTruthy();
  }));
});
