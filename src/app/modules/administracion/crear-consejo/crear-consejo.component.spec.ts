import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearConsejoComponent } from './crear-consejo.component';

describe('CrearConsejoComponent', () => {
  let component: CrearConsejoComponent;
  let fixture: ComponentFixture<CrearConsejoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearConsejoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearConsejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
