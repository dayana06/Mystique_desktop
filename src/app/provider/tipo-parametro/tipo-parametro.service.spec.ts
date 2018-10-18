import { TestBed, inject } from '@angular/core/testing';

import { TipoParametroService } from './tipo-parametro.service';

describe('TipoParametroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoParametroService]
    });
  });

  it('should be created', inject([TipoParametroService], (service: TipoParametroService) => {
    expect(service).toBeTruthy();
  }));
});
