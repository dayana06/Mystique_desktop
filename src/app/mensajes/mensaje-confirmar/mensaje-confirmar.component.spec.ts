import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeConfirmarComponent } from './mensaje-confirmar.component';

describe('MensajeConfirmarComponent', () => {
  let component: MensajeConfirmarComponent;
  let fixture: ComponentFixture<MensajeConfirmarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeConfirmarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeConfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
