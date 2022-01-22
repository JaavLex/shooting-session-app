import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionUpdateComponent } from './session-update.component';

describe('SessionUpdateComponent', () => {
  let component: SessionUpdateComponent;
  let fixture: ComponentFixture<SessionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
