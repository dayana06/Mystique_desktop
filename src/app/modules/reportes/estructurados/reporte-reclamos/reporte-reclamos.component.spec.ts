import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteReclamosComponent } from './reporte-reclamos.component';

describe('ReporteReclamosComponent', () => {
  let component: ReporteReclamosComponent;
  let fixture: ComponentFixture<ReporteReclamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteReclamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
