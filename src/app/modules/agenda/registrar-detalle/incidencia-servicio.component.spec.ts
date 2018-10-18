import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaServicioComponent } from './incidencia-servicio.component';

describe('IncidenciaServicioComponent', () => {
  let component: IncidenciaServicioComponent;
  let fixture: ComponentFixture<IncidenciaServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciaServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
