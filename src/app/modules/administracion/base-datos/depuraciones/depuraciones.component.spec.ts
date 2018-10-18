import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepuracionesComponent } from './depuraciones.component';

describe('DepuracionesComponent', () => {
  let component: DepuracionesComponent;
  let fixture: ComponentFixture<DepuracionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepuracionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepuracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
