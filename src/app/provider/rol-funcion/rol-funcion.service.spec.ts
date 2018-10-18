import { TestBed, inject } from '@angular/core/testing';

import { RolFuncionService } from './rol-funcion.service';

describe('RolFuncionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolFuncionService]
    });
  });

  it('should be created', inject([RolFuncionService], (service: RolFuncionService) => {
    expect(service).toBeTruthy();
  }));
});
