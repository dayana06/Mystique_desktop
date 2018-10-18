import { TestBed, inject } from '@angular/core/testing';

import { GestionConsejoService } from './gestion-consejo.service';

describe('GestionConsejoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestionConsejoService]
    });
  });

  it('should be created', inject([GestionConsejoService], (service: GestionConsejoService) => {
    expect(service).toBeTruthy();
  }));
});
