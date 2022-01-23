import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePersonComponent } from './home-person.component';

describe('HomePersonComponent', () => {
  let component: HomePersonComponent;
  let fixture: ComponentFixture<HomePersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
