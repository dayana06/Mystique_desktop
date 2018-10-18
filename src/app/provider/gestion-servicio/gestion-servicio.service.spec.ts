import { TestBed, inject } from '@angular/core/testing';

import { GestionServicioService } from './gestion-servicio.service';

describe('GestionServicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestionServicioService]
    });
  });

  it('should be created', inject([GestionServicioService], (service: GestionServicioService) => {
    expect(service).toBeTruthy();
  }));
});
