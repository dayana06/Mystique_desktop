import { TestBed, inject } from '@angular/core/testing';

import { VistaReclamoService } from './vista-reclamo.service';

describe('VistaReclamoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VistaReclamoService]
    });
  });

  it('should be created', inject([VistaReclamoService], (service: VistaReclamoService) => {
    expect(service).toBeTruthy();
  }));
});
