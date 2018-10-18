import { TestBed, inject } from '@angular/core/testing';

import { CategoriaParametroService } from './categoria-parametro.service';

describe('CategoriaParametroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriaParametroService]
    });
  });

  it('should be created', inject([CategoriaParametroService], (service: CategoriaParametroService) => {
    expect(service).toBeTruthy();
  }));
});
