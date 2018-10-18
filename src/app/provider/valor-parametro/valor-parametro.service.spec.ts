import { TestBed, inject } from '@angular/core/testing';

import { ValorParametroService } from './valor-parametro.service';

describe('ValorParametroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValorParametroService]
    });
  });

  it('should be created', inject([ValorParametroService], (service: ValorParametroService) => {
    expect(service).toBeTruthy();
  }));
});
