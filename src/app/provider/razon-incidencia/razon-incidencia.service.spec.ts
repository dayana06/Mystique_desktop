import { TestBed, inject } from '@angular/core/testing';

import { RazonIncidenciaService } from './razon-incidencia.service';

describe('RazonIncidenciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RazonIncidenciaService]
    });
  });

  it('should be created', inject([RazonIncidenciaService], (service: RazonIncidenciaService) => {
    expect(service).toBeTruthy();
  }));
});
