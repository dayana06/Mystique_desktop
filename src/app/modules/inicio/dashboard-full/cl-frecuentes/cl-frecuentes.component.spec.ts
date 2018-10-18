import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClFrecuentesComponent } from './cl-frecuentes.component';

describe('ClFrecuentesComponent', () => {
  let component: ClFrecuentesComponent;
  let fixture: ComponentFixture<ClFrecuentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClFrecuentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClFrecuentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
