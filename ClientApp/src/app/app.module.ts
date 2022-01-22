import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { DefaultButtonComponent } from "./default-button/default-button.component";
import { SummaryBarComponent } from "./summary-bar/summary-bar.component";
import { RecentSessionCompComponent } from "./recent-session-comp/recent-session-comp.component";
import { MostRecentCompComponent } from "./most-recent-comp/most-recent-comp.component";
import { SessionAdderComponent } from "./session-adder/session-adder.component";
import { Session } from "protractor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MinimalButtonComponent } from "./minimal-button/minimal-button.component";
import { SessionUpdateComponent } from "./session-update/session-update.component";

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
