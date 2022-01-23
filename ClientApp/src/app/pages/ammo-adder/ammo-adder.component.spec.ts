import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmoAdderComponent } from './ammo-adder.component';

describe('AmmoAdderComponent', () => {
  let component: AmmoAdderComponent;
  let fixture: ComponentFixture<AmmoAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmmoAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmoAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
