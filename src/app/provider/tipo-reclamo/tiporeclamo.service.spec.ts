import { TestBed, inject } from '@angular/core/testing';

import { TiporeclamoService } from './tiporeclamo.service';

describe('TiporeclamoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiporeclamoService]
    });
  });

  it('should be created', inject([TiporeclamoService], (service: TiporeclamoService) => {
    expect(service).toBeTruthy();
  }));
});
