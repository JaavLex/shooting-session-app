import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SessionViewerCompComponent } from "./session-viewer-comp.component";

describe("SessionViewerCompComponent", () => {
  let component: SessionViewerCompComponent;
  let fixture: ComponentFixture<SessionViewerCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SessionViewerCompComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionViewerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
