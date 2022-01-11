import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSessionCompComponent } from './recent-session-comp.component';

describe('RecentSessionCompComponent', () => {
  let component: RecentSessionCompComponent;
  let fixture: ComponentFixture<RecentSessionCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentSessionCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSessionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
