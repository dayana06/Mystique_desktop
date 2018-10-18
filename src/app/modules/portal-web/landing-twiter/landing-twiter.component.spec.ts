import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTwiterComponent } from './landing-twiter.component';

describe('LandingTwiterComponent', () => {
  let component: LandingTwiterComponent;
  let fixture: ComponentFixture<LandingTwiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingTwiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingTwiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
