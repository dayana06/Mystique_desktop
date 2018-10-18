import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenioComponent } from './disenio.component';

describe('DisenioComponent', () => {
  let component: DisenioComponent;
  let fixture: ComponentFixture<DisenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
