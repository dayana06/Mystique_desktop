import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoPasoComponent } from './segundo-paso.component';

describe('SegundoPasoComponent', () => {
  let component: SegundoPasoComponent;
  let fixture: ComponentFixture<SegundoPasoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoPasoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoPasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
