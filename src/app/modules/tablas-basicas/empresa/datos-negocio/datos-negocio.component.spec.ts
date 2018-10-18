import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosNegocioComponent } from './datos-negocio.component';

describe('DatosNegocioComponent', () => {
  let component: DatosNegocioComponent;
  let fixture: ComponentFixture<DatosNegocioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosNegocioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
