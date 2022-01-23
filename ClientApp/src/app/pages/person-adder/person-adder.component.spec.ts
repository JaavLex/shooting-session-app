import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAdderComponent } from './person-adder.component';

describe('PersonAdderComponent', () => {
  let component: PersonAdderComponent;
  let fixture: ComponentFixture<PersonAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
