import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponViewerCompComponent } from './weapon-viewer-comp.component';

describe('WeaponViewerCompComponent', () => {
  let component: WeaponViewerCompComponent;
  let fixture: ComponentFixture<WeaponViewerCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponViewerCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponViewerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
