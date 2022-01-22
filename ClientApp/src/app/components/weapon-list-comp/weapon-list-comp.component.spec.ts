import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponListCompComponent } from './weapon-list-comp.component';

describe('WeaponListCompComponent', () => {
  let component: WeaponListCompComponent;
  let fixture: ComponentFixture<WeaponListCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponListCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
