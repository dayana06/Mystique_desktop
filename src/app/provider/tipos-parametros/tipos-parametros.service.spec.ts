import { TestBed, inject } from '@angular/core/testing';

import { TiposParametrosService } from './tipos-parametros.service';

describe('TiposParametrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiposParametrosService]
    });
  });

  it('should be created', inject([TiposParametrosService], (service: TiposParametrosService) => {
    expect(service).toBeTruthy();
  }));
});
