import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AmmoListCompComponent } from "./ammo-list-comp.component";

describe("AmmoListCompComponent", () => {
  let component: AmmoListCompComponent;
  let fixture: ComponentFixture<AmmoListCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AmmoListCompComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmoListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
