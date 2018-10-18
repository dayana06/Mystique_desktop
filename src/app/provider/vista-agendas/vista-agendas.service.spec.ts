import { TestBed, inject } from '@angular/core/testing';

import { VistaAgendasService } from './vista-agendas.service';

describe('VistaAgendasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VistaAgendasService]
    });
  });

  it('should be created', inject([VistaAgendasService], (service: VistaAgendasService) => {
    expect(service).toBeTruthy();
  }));
});
