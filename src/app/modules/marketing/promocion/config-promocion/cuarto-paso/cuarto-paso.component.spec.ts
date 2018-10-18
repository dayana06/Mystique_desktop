import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoPasoComponent } from './cuarto-paso.component';

describe('CuartoPasoComponent', () => {
  let component: CuartoPasoComponent;
  let fixture: ComponentFixture<CuartoPasoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuartoPasoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartoPasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
