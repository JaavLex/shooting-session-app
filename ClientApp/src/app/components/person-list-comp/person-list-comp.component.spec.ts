import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonListCompComponent } from './person-list-comp.component';

describe('PersonListCompComponent', () => {
  let component: PersonListCompComponent;
  let fixture: ComponentFixture<PersonListCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonListCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
