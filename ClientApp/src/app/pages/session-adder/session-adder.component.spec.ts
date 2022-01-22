import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionAdderComponent } from './session-adder.component';

describe('SessionAdderComponent', () => {
  let component: SessionAdderComponent;
  let fixture: ComponentFixture<SessionAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
