import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AmmoViewerCompComponent } from "./ammo-viewer-comp.component";

describe("AmmoViewerCompComponent", () => {
  let component: AmmoViewerCompComponent;
  let fixture: ComponentFixture<AmmoViewerCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AmmoViewerCompComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmoViewerCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
