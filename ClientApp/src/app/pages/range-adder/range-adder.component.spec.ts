import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeAdderComponent } from './range-adder.component';

describe('RangeAdderComponent', () => {
  let component: RangeAdderComponent;
  let fixture: ComponentFixture<RangeAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
