import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableFilterModule } from 'mat-table-filter';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BettingPageComponent } from './betting-page/betting-page.component';
import { InsertUpdateContestComponent } from './betting-page/insert-update-contest/insert-update-contest.component';
// import { ChatComponent } from './chat/chat.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MyMatchesComponent } from './my-matches/my-matches.component';
import { ViewLiveMatchesComponent } from './my-matches/view-live-matches/view-live-matches.component';
import { ViewOldMatchesComponent } from './my-matches/view-old-matches/view-old-matches.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UpdateProfileComponent } from './user-profile/update-profile/update-profile.component';
import { ViewOthersUserProfileComponent } from './user-profile/view-others-user-profile/view-others-user-profile.component';
import { ViewUserProfileComponent } from './user-profile/view-user-profile/view-user-profile.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserRoutingModule } from './user-routing.module';


// console.log("user module loaded");

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserRegistrationComponent,
    MatchListComponent,
    LeaderBoardComponent,
    BettingPageComponent,
    UpdateProfileComponent,
    ViewUserProfileComponent,
    MyMatchesComponent,
    ViewLiveMatchesComponent,
    ViewOldMatchesComponent,
    ViewOthersUserProfileComponent,
    InsertUpdateContestComponent,
    // ChatComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule,
    MatSlideToggleModule,
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    NgbModule,
    FlexLayoutModule,
    MatTableFilterModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatRadioModule,
    MatSortModule,
    MatTabsModule,
    MatCardModule,
    LayoutModule,
    MatSelectModule,
    NgxMatFileInputModule,
    MatAutocompleteModule,
    MatRippleModule,
    MatTooltipModule,
  ]
})
export class UserModule { }
