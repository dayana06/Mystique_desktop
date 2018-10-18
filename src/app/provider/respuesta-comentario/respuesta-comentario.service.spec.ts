import { TestBed, inject } from '@angular/core/testing';

import { RespuestaComentarioService } from './respuesta-comentario.service';

describe('RespuestaComentarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RespuestaComentarioService]
    });
  });

  it('should be created', inject([RespuestaComentarioService], (service: RespuestaComentarioService) => {
    expect(service).toBeTruthy();
  }));
});
