import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoReclamoComponent } from './historico-reclamo.component';

describe('HistoricoReclamoComponent', () => {
  let component: HistoricoReclamoComponent;
  let fixture: ComponentFixture<HistoricoReclamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoReclamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
