import { TestBed, inject } from '@angular/core/testing';

import { RepuestaReclamoService } from './repuesta-reclamo.service';

describe('RepuestaReclamoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepuestaReclamoService]
    });
  });

  it('should be created', inject([RepuestaReclamoService], (service: RepuestaReclamoService) => {
    expect(service).toBeTruthy();
  }));
});
