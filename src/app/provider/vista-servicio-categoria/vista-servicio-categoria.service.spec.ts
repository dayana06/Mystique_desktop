import { TestBed, inject } from '@angular/core/testing';

import { VistaServicioCategoriaService } from './vista-servicio-categoria.service';

describe('VistaServicioCategoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VistaServicioCategoriaService]
    });
  });

  it('should be created', inject([VistaServicioCategoriaService], (service: VistaServicioCategoriaService) => {
    expect(service).toBeTruthy();
  }));
});
