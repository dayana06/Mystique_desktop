import { TestBed, inject } from '@angular/core/testing';

import { VComentariosService } from './v-comentarios.service';

describe('VComentariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VComentariosService]
    });
  });

  it('should be created', inject([VComentariosService], (service: VComentariosService) => {
    expect(service).toBeTruthy();
  }));
});
