import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./components/nav-menu/nav-menu.component";
import { HomeComponent } from "./pages/home/home.component";
import { CounterComponent } from "./components/counter/counter.component";
import { FetchDataComponent } from "./components/fetch-data/fetch-data.component";
import { DefaultButtonComponent } from "./components/default-button/default-button.component";
import { SummaryBarComponent } from "./components/summary-bar/summary-bar.component";
import { RecentSessionCompComponent } from "./components/recent-session-comp/recent-session-comp.component";
import { SessionViewerCompComponent } from "./components/session-viewer-comp/session-viewer-comp.component";
import { SessionAdderComponent } from "./pages/session-adder/session-adder.component";
import { Session } from "protractor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MinimalButtonComponent } from "./components/minimal-button/minimal-button.component";
import { SessionUpdateComponent } from "./pages/session-update/session-update.component";
import { HomeWeaponsComponent } from "./pages/home-weapons/home-weapons.component";
import { WeaponListCompComponent } from "./components/weapon-list-comp/weapon-list-comp.component";
import { WeaponViewerCompComponent } from "./components/weapon-viewer-comp/weapon-viewer-comp.component";
import { WeaponBarComponent } from "./components/weapon-bar/weapon-bar.component";
import { WeaponAdderComponent } from "./pages/weapon-adder/weapon-adder.component";
import { WeaponUpdateComponent } from "./pages/weapon-update/weapon-update.component";
import { HomeAmmoComponent } from "./pages/home-ammo/home-ammo.component";
import { AmmoListCompComponent } from "./components/ammo-list-comp/ammo-list-comp.component";
import { AmmoBarComponent } from "./components/ammo-bar/ammo-bar.component";
import { AmmoViewerCompComponent } from "./components/ammo-viewer-comp/ammo-viewer-comp.component";
import { AmmoAdderComponent } from "./pages/ammo-adder/ammo-adder.component";
import { AmmoUpdateComponent } from "./pages/ammo-update/ammo-update.component";
import { HomePersonComponent } from "./pages/home-person/home-person.component";
import { PersonBarComponent } from "./components/person-bar/person-bar.component";
import { PersonListCompComponent } from "./components/person-list-comp/person-list-comp.component";
import { PersonViewerCompComponent } from "./components/person-viewer-comp/person-viewer-comp.component";
import { PersonAdderComponent } from "./pages/person-adder/person-adder.component";
import { PersonUpdateComponent } from "./pages/person-update/person-update.component";
import { HomeRangeComponent } from "./pages/home-range/home-range.component";
import { RangeBarComponent } from "./components/range-bar/range-bar.component";
import { RangeListCompComponent } from "./components/range-list-comp/range-list-comp.component";
import { RangeViewerCompComponent } from "./components/range-viewer-comp/range-viewer-comp.component";
import { RangeAdderComponent } from "./pages/range-adder/range-adder.component";
import { RangeUpdateComponent } from "./pages/range-update/range-update.component";
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    DefaultButtonComponent,
    SummaryBarComponent,
    RecentSessionCompComponent,
    SessionViewerCompComponent,
    SessionAdderComponent,
    MinimalButtonComponent,
    SessionUpdateComponent,
    HomeWeaponsComponent,
    WeaponListCompComponent,
    WeaponViewerCompComponent,
    WeaponBarComponent,
    WeaponAdderComponent,
    WeaponUpdateComponent,
    HomeAmmoComponent,
    AmmoListCompComponent,
    AmmoBarComponent,
    AmmoViewerCompComponent,
    AmmoAdderComponent,
    AmmoUpdateComponent,
    HomePersonComponent,
    PersonBarComponent,
    PersonListCompComponent,
    PersonViewerCompComponent,
    PersonAdderComponent,
    PersonUpdateComponent,
    HomeRangeComponent,
    RangeBarComponent,
    RangeListCompComponent,
    RangeViewerCompComponent,
    RangeAdderComponent,
    RangeUpdateComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "addsession", component: SessionAdderComponent },
      { path: "updatesession/:id", component: SessionUpdateComponent },
      { path: "weapons", component: HomeWeaponsComponent },
      { path: "addweapon", component: WeaponAdderComponent },
      { path: "updateweapon/:id", component: WeaponUpdateComponent },
      { path: "ammos", component: HomeAmmoComponent },
      { path: "addammo", component: AmmoAdderComponent },
      { path: "updateammo/:id", component: AmmoUpdateComponent },
      { path: "persons", component: HomePersonComponent },
      { path: "addperson", component: PersonAdderComponent },
      { path: "updateperson/:id", component: PersonUpdateComponent },
      { path: "ranges", component: HomeRangeComponent },
      { path: "addrange", component: RangeAdderComponent },
      { path: "updaterange/:id", component: RangeUpdateComponent },
      { path: "counter", component: CounterComponent },
      { path: "fetch-data", component: FetchDataComponent },
    ]),
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
