import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasRecibidasComponent } from './citas-recibidas.component';

describe('CitasRecibidasComponent', () => {
  let component: CitasRecibidasComponent;
  let fixture: ComponentFixture<CitasRecibidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasRecibidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasRecibidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
