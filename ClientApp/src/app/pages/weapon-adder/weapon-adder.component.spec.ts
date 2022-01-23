import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WeaponAdderComponent } from "./weapon-adder.component";

describe("WeaponAdderComponent", () => {
  let component: WeaponAdderComponent;
  let fixture: ComponentFixture<WeaponAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeaponAdderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
