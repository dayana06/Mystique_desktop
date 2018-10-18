import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteComentariosComponent } from './reporte-comentarios.component';

describe('ReporteComentariosComponent', () => {
  let component: ReporteComentariosComponent;
  let fixture: ComponentFixture<ReporteComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
