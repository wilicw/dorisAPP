import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackBusComponent } from './back-bus.component';

describe('BackBusComponent', () => {
  let component: BackBusComponent;
  let fixture: ComponentFixture<BackBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
