import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponUpdateComponent } from './weapon-update.component';

describe('WeaponUpdateComponent', () => {
  let component: WeaponUpdateComponent;
  let fixture: ComponentFixture<WeaponUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
