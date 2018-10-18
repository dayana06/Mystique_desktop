import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosAtendidosComponent } from './servicios-atendidos.component';

describe('ServiciosAtendidosComponent', () => {
  let component: ServiciosAtendidosComponent;
  let fixture: ComponentFixture<ServiciosAtendidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosAtendidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosAtendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
