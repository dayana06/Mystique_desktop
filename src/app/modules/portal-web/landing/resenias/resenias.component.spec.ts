import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseniasComponent } from './resenias.component';

describe('ReseniasComponent', () => {
  let component: ReseniasComponent;
  let fixture: ComponentFixture<ReseniasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseniasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
