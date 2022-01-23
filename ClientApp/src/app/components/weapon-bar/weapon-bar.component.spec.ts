import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponBarComponent } from './weapon-bar.component';

describe('WeaponBarComponent', () => {
  let component: WeaponBarComponent;
  let fixture: ComponentFixture<WeaponBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
