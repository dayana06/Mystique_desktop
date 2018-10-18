import { TestBed, inject } from '@angular/core/testing';

import { GestionPromocionService } from './gestion-promocion.service';

describe('GestionPromocionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestionPromocionService]
    });
  });

  it('should be created', inject([GestionPromocionService], (service: GestionPromocionService) => {
    expect(service).toBeTruthy();
  }));
});
