import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingConsejosComponent } from './landing-consejos.component';

describe('LandingConsejosComponent', () => {
  let component: LandingConsejosComponent;
  let fixture: ComponentFixture<LandingConsejosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingConsejosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingConsejosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
