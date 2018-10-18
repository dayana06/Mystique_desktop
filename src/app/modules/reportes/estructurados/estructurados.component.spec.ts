import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuradosComponent } from './estructurados.component';

describe('EstructuradosComponent', () => {
  let component: EstructuradosComponent;
  let fixture: ComponentFixture<EstructuradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstructuradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstructuradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
