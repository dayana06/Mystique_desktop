import { TestBed, inject } from '@angular/core/testing';

import { TipoRepuestaReclamoService } from './tipo-repuesta-reclamo.service';

describe('TipoRepuestaReclamoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoRepuestaReclamoService]
    });
  });

  it('should be created', inject([TipoRepuestaReclamoService], (service: TipoRepuestaReclamoService) => {
    expect(service).toBeTruthy();
  }));
});
