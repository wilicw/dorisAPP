import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBusComponent } from './go-bus.component';

describe('GoBusComponent', () => {
  let component: GoBusComponent;
  let fixture: ComponentFixture<GoBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
