import { TestBed, inject } from '@angular/core/testing';

import { TipoRepuestaComentarioService } from './tipo-repuesta-comentario.service';

describe('TipoRepuestaComentarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoRepuestaComentarioService]
    });
  });

  it('should be created', inject([TipoRepuestaComentarioService], (service: TipoRepuestaComentarioService) => {
    expect(service).toBeTruthy();
  }));
});
