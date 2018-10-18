import { TestBed, inject } from '@angular/core/testing';

import { TipoRespPresupuestoService } from './tipo-resp-presupuesto.service';

describe('TipoRespPresupuestoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoRespPresupuestoService]
    });
  });

  it('should be created', inject([TipoRespPresupuestoService], (service: TipoRespPresupuestoService) => {
    expect(service).toBeTruthy();
  }));
});
