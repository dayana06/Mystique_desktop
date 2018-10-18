import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsejosComponent } from './list-consejos.component';

describe('ListConsejosComponent', () => {
  let component: ListConsejosComponent;
  let fixture: ComponentFixture<ListConsejosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConsejosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsejosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
