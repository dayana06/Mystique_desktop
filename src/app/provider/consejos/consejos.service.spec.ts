import { TestBed, inject } from '@angular/core/testing';

import { ConsejosService } from './consejos.service';

describe('ConsejosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsejosService]
    });
  });

  it('should be created', inject([ConsejosService], (service: ConsejosService) => {
    expect(service).toBeTruthy();
  }));
});
