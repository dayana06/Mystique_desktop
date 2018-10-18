import { TestBed, inject } from '@angular/core/testing';

import { ContactoNegocioService } from './contacto-negocio.service';

describe('ContactoNegocioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactoNegocioService]
    });
  });

  it('should be created', inject([ContactoNegocioService], (service: ContactoNegocioService) => {
    expect(service).toBeTruthy();
  }));
});
