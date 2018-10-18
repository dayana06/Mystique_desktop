import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingServiciosComponent } from './landing-servicios.component';

describe('LandingServiciosComponent', () => {
  let component: LandingServiciosComponent;
  let fixture: ComponentFixture<LandingServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
