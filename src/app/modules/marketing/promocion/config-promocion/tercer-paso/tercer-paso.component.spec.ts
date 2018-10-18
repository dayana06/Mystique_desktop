import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerPasoComponent } from './tercer-paso.component';

describe('TercerPasoComponent', () => {
  let component: TercerPasoComponent;
  let fixture: ComponentFixture<TercerPasoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercerPasoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TercerPasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
