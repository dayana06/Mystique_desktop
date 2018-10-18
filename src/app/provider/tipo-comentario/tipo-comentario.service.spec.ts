import { TestBed, inject } from '@angular/core/testing';

import { TipoComentarioService } from './tipo-comentario.service';

describe('TipoComentarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoComentarioService]
    });
  });

  it('should be created', inject([TipoComentarioService], (service: TipoComentarioService) => {
    expect(service).toBeTruthy();
  }));
});
