import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalButtonComponent } from './minimal-button.component';

describe('MinimalButtonComponent', () => {
  let component: MinimalButtonComponent;
  let fixture: ComponentFixture<MinimalButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimalButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
