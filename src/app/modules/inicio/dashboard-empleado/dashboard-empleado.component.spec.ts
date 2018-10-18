import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmpleadoComponent } from './dashboard-empleado.component';

describe('DashboardEmpleadoComponent', () => {
  let component: DashboardEmpleadoComponent;
  let fixture: ComponentFixture<DashboardEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
