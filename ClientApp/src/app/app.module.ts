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
import { MostRecentCompComponent } from "./components/most-recent-comp/most-recent-comp.component";
import { SessionAdderComponent } from "./pages/session-adder/session-adder.component";
import { Session } from "protractor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MinimalButtonComponent } from "./components/minimal-button/minimal-button.component";
import { SessionUpdateComponent } from "./pages/session-update/session-update.component";

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
    MostRecentCompComponent,
    SessionAdderComponent,
    MinimalButtonComponent,
    SessionUpdateComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "addsession", component: SessionAdderComponent },
      { path: "counter", component: CounterComponent },
      { path: "fetch-data", component: FetchDataComponent },
      { path: "updatesession/:id", component: SessionUpdateComponent },
    ]),
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
