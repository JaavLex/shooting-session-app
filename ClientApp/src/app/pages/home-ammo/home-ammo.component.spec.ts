import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAmmoComponent } from './home-ammo.component';

describe('HomeAmmoComponent', () => {
  let component: HomeAmmoComponent;
  let fixture: ComponentFixture<HomeAmmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAmmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAmmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
