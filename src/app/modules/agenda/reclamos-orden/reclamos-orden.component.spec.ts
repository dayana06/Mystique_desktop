import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamosOrdenComponent } from './reclamos-orden.component';

describe('ReclamosOrdenComponent', () => {
  let component: ReclamosOrdenComponent;
  let fixture: ComponentFixture<ReclamosOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamosOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamosOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
