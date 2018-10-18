import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumosUtilizadosComponent } from './insumos-utilizados.component';

describe('InsumosUtilizadosComponent', () => {
  let component: InsumosUtilizadosComponent;
  let fixture: ComponentFixture<InsumosUtilizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsumosUtilizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsumosUtilizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
