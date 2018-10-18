import { TestBed, inject } from '@angular/core/testing';

import { DescripcionNegocioService } from './descripcion-negocio.service';

describe('DescripcionNegocioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DescripcionNegocioService]
    });
  });

  it('should be created', inject([DescripcionNegocioService], (service: DescripcionNegocioService) => {
    expect(service).toBeTruthy();
  }));
});
