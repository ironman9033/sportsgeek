import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
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
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableFilterModule } from 'mat-table-filter';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './common/components/change-password/change-password.component';
import { ConfirmBoxComponent } from './common/components/confirm-box/confirm-box.component';
import { AboutUsComponent } from './common/components/footer/about-us/about-us.component';
import { ContactUsComponent } from './common/components/footer/contact-us/contact-us.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { RulesComponent } from './common/components/footer/rules/rules.component';
import { ForgotPasswordComponent } from './common/components/forgot-password/forgot-password.component';
import { HeaderComponent } from './common/components/header/header.component';
import { LoadingComponent } from './common/components/loading/loading.component';
import { NotFoundComponent } from './common/components/not-found/not-found.component';
import { SnackbarComponent } from './common/components/snackbar/snackbar.component';
import { AuthGuard } from './common/guard/auth.guard';
import { HttpInterceptorService } from './common/service/http-interceptor/http-interceptor.service';
import { LoginComponent } from './login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { MatchState } from './common/store/state/match/matches.state';
import { UpcomingMatchState } from './common/store/state/match/upcomingMatches.state';
import { UserState } from './common/store/state/user/user.state';
import { OldMatchState } from './common/store/state/match/oldMatches.state';
import { UserStatisticsState } from './common/store/state/user/userstats.state';
import { UserFBState } from './common/store/state/user/userfuturebets.state';

// console.log("app module loaded");

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    NotFoundComponent,
    SnackbarComponent,
    LoginComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    ConfirmBoxComponent,
    AboutUsComponent,
    ContactUsComponent,
    RulesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    BrowserAnimationsModule,
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
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgxsModule.forRoot([MatchState,UpcomingMatchState,UserState,OldMatchState,UserStatisticsState,UserFBState]),
    // NgxsModule.forRoot([MatchState,UpcomingMatchState], { developmentMode: !environment.production }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
