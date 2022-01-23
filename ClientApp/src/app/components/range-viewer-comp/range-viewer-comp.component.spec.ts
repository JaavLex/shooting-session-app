import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeViewerCompComponent } from './range-viewer-comp.component';

describe('RangeViewerCompComponent', () => {
  let component: RangeViewerCompComponent;
  let fixture: ComponentFixture<RangeViewerCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeViewerCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeViewerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
