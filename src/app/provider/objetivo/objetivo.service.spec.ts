import { TestBed, inject } from '@angular/core/testing';

import { ObjetivoService } from './objetivo.service';

describe('ObjetivoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjetivoService]
    });
  });

  it('should be created', inject([ObjetivoService], (service: ObjetivoService) => {
    expect(service).toBeTruthy();
  }));
});
