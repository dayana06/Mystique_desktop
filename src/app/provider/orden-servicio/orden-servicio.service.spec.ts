import { TestBed, inject } from '@angular/core/testing';

import { OrdenServicioService } from './orden-servicio.service';

describe('OrdenServicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdenServicioService]
    });
  });

  it('should be created', inject([OrdenServicioService], (service: OrdenServicioService) => {
    expect(service).toBeTruthy();
  }));
});
