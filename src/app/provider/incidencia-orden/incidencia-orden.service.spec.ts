import { TestBed, inject } from '@angular/core/testing';

import { IncidenciaOrdenService } from './incidencia-orden.service';

describe('IncidenciaOrdenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncidenciaOrdenService]
    });
  });

  it('should be created', inject([IncidenciaOrdenService], (service: IncidenciaOrdenService) => {
    expect(service).toBeTruthy();
  }));
});
