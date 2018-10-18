import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarFuncionesComponent } from './asignar-funciones.component';

describe('AsignarFuncionesComponent', () => {
  let component: AsignarFuncionesComponent;
  let fixture: ComponentFixture<AsignarFuncionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarFuncionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarFuncionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
