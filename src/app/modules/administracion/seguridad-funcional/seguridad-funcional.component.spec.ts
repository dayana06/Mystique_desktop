import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadFuncionalComponent } from './seguridad-funcional.component';

describe('SeguridadFuncionalComponent', () => {
  let component: SeguridadFuncionalComponent;
  let fixture: ComponentFixture<SeguridadFuncionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguridadFuncionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadFuncionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
