import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoServicioComponent } from './historico-servicio.component';

describe('HistoricoServicioComponent', () => {
  let component: HistoricoServicioComponent;
  let fixture: ComponentFixture<HistoricoServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
