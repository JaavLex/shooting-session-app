import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmoBarComponent } from './ammo-bar.component';

describe('AmmoBarComponent', () => {
  let component: AmmoBarComponent;
  let fixture: ComponentFixture<AmmoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmmoBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
