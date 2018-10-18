import { TestBed, inject } from '@angular/core/testing';

import { AgregarOrdenService } from './agregar-orden.service';

describe('AgregarOrdenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgregarOrdenService]
    });
  });

  it('should be created', inject([AgregarOrdenService], (service: AgregarOrdenService) => {
    expect(service).toBeTruthy();
  }));
});
