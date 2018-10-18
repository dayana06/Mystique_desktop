import { TestBed, inject } from '@angular/core/testing';

import { VistaEmpleadosCategoriaService } from './vista-empleados-categoria.service';

describe('VistaEmpleadosCategoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VistaEmpleadosCategoriaService]
    });
  });

  it('should be created', inject([VistaEmpleadosCategoriaService], (service: VistaEmpleadosCategoriaService) => {
    expect(service).toBeTruthy();
  }));
});
