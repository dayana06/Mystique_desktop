import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingEstilistasComponent } from './landing-estilistas.component';

describe('LandingEstilistasComponent', () => {
  let component: LandingEstilistasComponent;
  let fixture: ComponentFixture<LandingEstilistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingEstilistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingEstilistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
