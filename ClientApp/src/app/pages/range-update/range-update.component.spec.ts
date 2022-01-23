import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeUpdateComponent } from './range-update.component';

describe('RangeUpdateComponent', () => {
  let component: RangeUpdateComponent;
  let fixture: ComponentFixture<RangeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
