import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerPasoComponent } from './primer-paso.component';

describe('PrimerPasoComponent', () => {
  let component: PrimerPasoComponent;
  let fixture: ComponentFixture<PrimerPasoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerPasoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerPasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
