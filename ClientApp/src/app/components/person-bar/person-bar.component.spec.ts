import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonBarComponent } from './person-bar.component';

describe('PersonBarComponent', () => {
  let component: PersonBarComponent;
  let fixture: ComponentFixture<PersonBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
