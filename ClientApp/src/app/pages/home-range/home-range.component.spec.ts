import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRangeComponent } from './home-range.component';

describe('HomeRangeComponent', () => {
  let component: HomeRangeComponent;
  let fixture: ComponentFixture<HomeRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
