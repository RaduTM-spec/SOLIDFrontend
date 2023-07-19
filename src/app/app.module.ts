import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {FormsModule} from "@angular/forms";
import { ProgressBarComponent } from './dashboard/progress-bar/progress-bar.component';
import { TeamCardComponent } from './dashboard/team-card/team-card.component';
import { JoinActivityModalComponent } from './join-activity-modal/join-activity-modal.component';
import { CreateActivityModalComponent } from './create-activity-modal/create-activity-modal.component';
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {HttpClientModule} from "@angular/common/http";
import { SessionCardComponent } from './user-box/session-card/session-card.component';
import { ActivityComponent } from './navigation/activity/activity.component';
import { InfoContainerComponent } from './dashboard/info-container/info-container.component';
import { MembersTableComponent } from './dashboard/members-table/members-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProgressBarComponent,
    TeamCardComponent,
    JoinActivityModalComponent,
    CreateActivityModalComponent,
    SessionCardComponent,
    routingComponents,
    ActivityComponent,
    InfoContainerComponent,
    MembersTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
