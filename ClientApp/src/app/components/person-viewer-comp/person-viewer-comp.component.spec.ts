import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonViewerCompComponent } from './person-viewer-comp.component';

describe('PersonViewerCompComponent', () => {
  let component: PersonViewerCompComponent;
  let fixture: ComponentFixture<PersonViewerCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonViewerCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonViewerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
