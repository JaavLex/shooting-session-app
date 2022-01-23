import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmoUpdateComponent } from './ammo-update.component';

describe('AmmoUpdateComponent', () => {
  let component: AmmoUpdateComponent;
  let fixture: ComponentFixture<AmmoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmmoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
