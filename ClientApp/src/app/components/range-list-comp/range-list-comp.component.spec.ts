import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeListCompComponent } from './range-list-comp.component';

describe('RangeListCompComponent', () => {
  let component: RangeListCompComponent;
  let fixture: ComponentFixture<RangeListCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeListCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
