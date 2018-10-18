import { TestBed, inject } from '@angular/core/testing';

import { ValoresParametrosService } from './valores-parametros.service';

describe('ValoresParametrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValoresParametrosService]
    });
  });

  it('should be created', inject([ValoresParametrosService], (service: ValoresParametrosService) => {
    expect(service).toBeTruthy();
  }));
});
