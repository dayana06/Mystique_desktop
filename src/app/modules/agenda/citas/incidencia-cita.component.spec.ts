import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaCitaComponent } from './incidencia-cita.component';

describe('IncidenciaCitaComponent', () => {
  let component: IncidenciaCitaComponent;
  let fixture: ComponentFixture<IncidenciaCitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciaCitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
