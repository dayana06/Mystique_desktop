import { TestBed, inject } from '@angular/core/testing';

import { CategoriaDependienteService } from './categoria-dependiente.service';

describe('CategoriaDependienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriaDependienteService]
    });
  });

  it('should be created', inject([CategoriaDependienteService], (service: CategoriaDependienteService) => {
    expect(service).toBeTruthy();
  }));
});
