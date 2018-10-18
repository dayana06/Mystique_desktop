import { TestBed, inject } from '@angular/core/testing';

import { ReporteComentarioService } from './reporte-comentario.service';

describe('ReporteComentarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReporteComentarioService]
    });
  });

  it('should be created', inject([ReporteComentarioService], (service: ReporteComentarioService) => {
    expect(service).toBeTruthy();
  }));
});
