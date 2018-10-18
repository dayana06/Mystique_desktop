import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPromocionComponent } from './config-promocion.component';

describe('ConfigPromocionComponent', () => {
  let component: ConfigPromocionComponent;
  let fixture: ComponentFixture<ConfigPromocionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigPromocionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPromocionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
