import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearServiciosComponent } from './crear-servicios.component';

describe('CrearServiciosComponent', () => {
  let component: CrearServiciosComponent;
  let fixture: ComponentFixture<CrearServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
