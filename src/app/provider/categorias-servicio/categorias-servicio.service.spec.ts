import { TestBed, inject } from '@angular/core/testing';

import { CategoriasServicioService } from './categorias-servicio.service';

describe('CategoriasServicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriasServicioService]
    });
  });

  it('should be created', inject([CategoriasServicioService], (service: CategoriasServicioService) => {
    expect(service).toBeTruthy();
  }));
});
