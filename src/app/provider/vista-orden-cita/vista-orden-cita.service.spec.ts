import { TestBed, inject } from '@angular/core/testing';

import { VistaOrdenCitaService } from './vista-orden-cita.service';

describe('VistaOrdenCitaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VistaOrdenCitaService]
    });
  });

  it('should be created', inject([VistaOrdenCitaService], (service: VistaOrdenCitaService) => {
    expect(service).toBeTruthy();
  }));
});
