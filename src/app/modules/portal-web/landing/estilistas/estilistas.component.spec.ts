import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstilistasComponent } from './estilistas.component';

describe('EstilistasComponent', () => {
  let component: EstilistasComponent;
  let fixture: ComponentFixture<EstilistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstilistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstilistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
