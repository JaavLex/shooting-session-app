import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWeaponsComponent } from './home-weapons.component';

describe('HomeWeaponsComponent', () => {
  let component: HomeWeaponsComponent;
  let fixture: ComponentFixture<HomeWeaponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWeaponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
