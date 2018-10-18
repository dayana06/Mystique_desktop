import { TestBed, inject } from '@angular/core/testing';

import { TiposServiciosService } from './tipos-servicios.service';

describe('TiposServiciosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiposServiciosService]
    });
  });

  it('should be created', inject([TiposServiciosService], (service: TiposServiciosService) => {
    expect(service).toBeTruthy();
  }));
});
