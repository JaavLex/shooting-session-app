import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRecentCompComponent } from './most-recent-comp.component';

describe('MostRecentCompComponent', () => {
  let component: MostRecentCompComponent;
  let fixture: ComponentFixture<MostRecentCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostRecentCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRecentCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
