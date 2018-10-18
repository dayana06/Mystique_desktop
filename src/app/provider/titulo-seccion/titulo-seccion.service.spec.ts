import { TestBed, inject } from '@angular/core/testing';

import { TituloSeccionService } from './titulo-seccion.service';

describe('TituloSeccionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TituloSeccionService]
    });
  });

  it('should be created', inject([TituloSeccionService], (service: TituloSeccionService) => {
    expect(service).toBeTruthy();
  }));
});
