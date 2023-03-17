import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { LoadingComponent } from 'src/app/common/components/loading/loading.component';
import { SnackbarComponent } from 'src/app/common/components/snackbar/snackbar.component';
import { getErrorMessage, NO_RESP } from 'src/app/common/constants/error-message';
import { getSnackbarProperties } from 'src/app/common/constants/snackbar-properties';
import { MatchModel } from 'src/app/common/model/match/match-model';
import { OldMatchesModel } from 'src/app/common/model/match/oldMatchesModel';
import { UpcomingMatch } from 'src/app/common/model/match/upcomingMatches';
import { TeamModel } from 'src/app/common/model/team/team-model';
import { UserModel } from 'src/app/common/model/user/user-model';
import { VenueModel } from 'src/app/common/model/venue/venue';
import { MatchesService } from 'src/app/common/service/matches_service/matches.service';
import { TeamService } from 'src/app/common/service/team_service/team.service';
import { UserService } from 'src/app/common/service/user_service/user.service';
import { VenueService } from 'src/app/common/service/venue/venue.service';
import { GetMatch } from 'src/app/common/store/actions/match/matches.action';
import { GetOldMatch } from 'src/app/common/store/actions/match/oldmatch.action';
import { GetUpcomingMatch } from 'src/app/common/store/actions/match/upcomingmatch.action';
import { GetUser } from 'src/app/common/store/actions/user/user.action';
import { MatchState } from 'src/app/common/store/state/match/matches.state';
import { OldMatchState } from 'src/app/common/store/state/match/oldMatches.state';
import { UpcomingMatchState } from 'src/app/common/store/state/match/upcomingMatches.state';
import { UserState } from 'src/app/common/store/state/user/user.state';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit, OnDestroy{

  teamData: TeamModel[] = [];
  venueData: VenueModel[] = [];

  upcomingMatches: UpcomingMatch[] = [];
  @Select(UpcomingMatchState.getUpcomingMatchData)
  upcomingMatches$!: Observable<UpcomingMatch[]>;
  @Select(UpcomingMatchState.upcomingMatchLoaded)
  upcomingmatchLoaded$!: Observable<boolean>;
  upcomingmatchLoadedSub!: Subscription;

  allMatch: MatchModel[] = [];
  @Select(MatchState.getMatchData)
  allMatch$!: Observable<MatchModel[]>;
  @Select(MatchState.MatchLoaded)
  allMatchLoaded$!: Observable<boolean>;
  allMatchLoadedSub!:Subscription;

  oldMatch: MatchModel[] = [];
  @Select(OldMatchState.getOldMatchData)
  oldMatch$!: Observable<MatchModel[]>;
  @Select(OldMatchState.OldMatchLoaded)
  oldMatchLoaded$!: Observable<boolean>;
  oldMatchLoadedSub!:Subscription;

  userData: UserModel[] = [];
  @Select(UserState.getUserData)
  userData$!: Observable<UserModel[]>;
  @Select(UserState.UserLoaded)
  userDataLoaded$!: Observable<boolean>;
  userDataLoadedSub!:Subscription;

  constructor(
    private teamservice: TeamService,
    private userservice: UserService,
    private venueservice: VenueService,
    private matchservice: MatchesService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private store: Store
  ) { }

  async ngOnInit() {
    this.userData = await this.getUsers();
    // console.log(this.userData);
    this.userData$.subscribe((res) => {
      this.userData = res;
    });

    this.allMatch = await this.getMatches();
    // console.log(this.allMatch);
    this.allMatch$.subscribe((res) => {
      this.allMatch = res;
    });

    this.oldMatch = await this.getOldMatches();
    // console.log(this.oldMatch);
    this.oldMatch$.subscribe((res) => {
      this.oldMatch = res;
    });

    this.upcomingMatches = await this.getUpcomingMatchDetails();
    // console.log(this.upcomingMatches);
    this.upcomingMatches$.subscribe((res) => {
      this.upcomingMatches = res;
    });

    this.teamData = await this.getTeams();
    // console.log(this.teamData);

    this.venueData = await this.getVenue();
    // console.log(this.venueData);

  }

  activeStatusCounter(inputs:any) {
    let counter = 0;
    for (const input of inputs) {
      if (input.status === true) counter += 1;
    }
    return counter;
  }

  inactiveStatusCounter(inputs:any) {
    let counter = 0;
    for (const input of inputs) {
      if (input.status === false) counter += 1;
    }
    return counter;
  }

  async getUsers(): Promise<any> {
    this.userDataLoadedSub = this.userDataLoaded$.subscribe(async(loadeduserdata) => {
      if (!loadeduserdata) {
        await this.store.dispatch(new GetUser());
      }
    });
  }

  // async getUsers(): Promise<any> {
  //   let panelClass = 'green';
  //   let snackbarMsg = '';
  //   let snackbarRef = null;
  //   const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
  //   let userModel: UserModel[] = [];
  //   let resp = null;
  //   try {
  //     resp = await this.userservice.getAllUser();
  //     userModel = resp.body;
  //     if (userModel) {
  //       dialogRef.close();
  //       return userModel;
  //     } else {
  //       snackbarMsg = NO_RESP;
  //       panelClass = 'red';
  //     }
  //   } catch (ex) {
  //     snackbarMsg = getErrorMessage(ex);
  //     panelClass = 'red';
  //   } finally {
  //     dialogRef.close();
  //   }
  //   if (snackbarMsg) {
  //     snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
  //       getSnackbarProperties(snackbarMsg, panelClass));
  //   }
  //   return [];
  // }

  async getMatches(): Promise<any> {
    this.allMatchLoadedSub = this.allMatchLoaded$.subscribe(async(loadedmatchdata) => {
      if (!loadedmatchdata) {
        await this.store.dispatch(new GetMatch());
      }
    });
  }

  // async getMatches(): Promise<any> {
  //   let panelClass = 'green';
  //   let snackbarMsg = '';
  //   let snackbarRef = null;
  //   const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
  //   let matchModel: MatchModel[] = [];
  //   let resp = null;
  //   try {
  //     resp = await this.matchservice.getAllMatches();
  //     matchModel = resp.body;
  //     if (matchModel) {
  //       dialogRef.close();
  //       return matchModel;
  //     } else {
  //       snackbarMsg = NO_RESP;
  //       panelClass = 'red';
  //     }
  //   } catch (ex) {
  //     snackbarMsg = getErrorMessage(ex);
  //     panelClass = 'red';
  //   } finally {
  //     dialogRef.close();
  //   }
  //   if (snackbarMsg) {
  //     snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
  //       getSnackbarProperties(snackbarMsg, panelClass));
  //   }
  //   return [];
  // }

  async getOldMatches(): Promise<any> {
    this.oldMatchLoadedSub = this.oldMatchLoaded$.subscribe(async(loadedmatchdata) => {
      if (!loadedmatchdata) {
        await this.store.dispatch(new GetOldMatch());
      }
    });
  }

  // async getOldMatches(): Promise<any> {
  //   let panelClass = 'green';
  //   let snackbarMsg = '';
  //   let snackbarRef = null;
  //   const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
  //   let matchModel: MatchModel[] = [];
  //   let resp = null;
  //   try {
  //     resp = await this.matchservice.getAllOldMatches();
  //     matchModel = resp.body;
  //     if (matchModel) {
  //       dialogRef.close();
  //       return matchModel;
  //     } else {
  //       snackbarMsg = NO_RESP;
  //       panelClass = 'red';
  //     }
  //   } catch (ex) {
  //     snackbarMsg = getErrorMessage(ex);
  //     panelClass = 'red';
  //   } finally {
  //     dialogRef.close();
  //   }
  //   if (snackbarMsg) {
  //     snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
  //       getSnackbarProperties(snackbarMsg, panelClass));
  //   }
  //   return [];
  // }

  async getUpcomingMatchDetails(): Promise<any> {
    this.upcomingmatchLoadedSub = this.upcomingmatchLoaded$.subscribe(
      async (loadedmatchdata) => {
        if (!loadedmatchdata) {
          await this.store.dispatch(new GetUpcomingMatch());
        }});
  }

  // async getMatchDetails(): Promise<any> {
  //   let panelClass = 'green';
  //   let snackbarMsg = '';
  //   let snackbarRef = null;
  //   const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
  //   let matchModel: MatchModel[] = [];
  //   let resp = null;
  //   try {
  //     resp = await this.matchservice.getAllUpcomingMatches();
  //     matchModel = resp.body;
  //     if (matchModel) {
  //       dialogRef.close();
  //       return matchModel;
  //     } else {
  //       snackbarMsg = NO_RESP;
  //       panelClass = 'red';
  //     }
  //   } catch (ex) {
  //     snackbarMsg = getErrorMessage(ex);
  //     panelClass = 'red';
  //   } finally {
  //     dialogRef.close();
  //   }
  //   if (snackbarMsg) {
  //     snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
  //       getSnackbarProperties(snackbarMsg, panelClass));
  //   }
  //   return [];
  // }

  async getTeams(): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
    let teamModel: TeamModel[] = [];
    let resp = null;
    try {
      resp = await this.teamservice.getAllTeams();
      teamModel = resp.body;
      if (teamModel) {
        dialogRef.close();
        return teamModel;
      } else {
        snackbarMsg = NO_RESP;
        panelClass = 'red';
      }
    } catch (ex) {
      snackbarMsg = getErrorMessage(ex);
      panelClass = 'red';
    } finally {
      dialogRef.close();
    }
    if (snackbarMsg) {
      snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
        getSnackbarProperties(snackbarMsg, panelClass));
    }
    return [];
  }

  async getVenue(): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
    let venueModel: VenueModel[] = [];
    let resp = null;
    try {
      resp = await this.venueservice.getAllVenue();
      venueModel = resp.body;
      if (venueModel) {
        dialogRef.close();
        return venueModel;
      } else {
        snackbarMsg = NO_RESP;
        panelClass = 'red';
      }
    } catch (ex) {
      snackbarMsg = getErrorMessage(ex);
      panelClass = 'red';
    } finally {
      dialogRef.close();
    }
    if (snackbarMsg) {
      snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
        getSnackbarProperties(snackbarMsg, panelClass));
    }
    return [];
  }

  async ngOnDestroy(): Promise<any>{
    this.oldMatchLoadedSub.unsubscribe();
    this.allMatchLoadedSub.unsubscribe();
    this.upcomingmatchLoadedSub.unsubscribe();
    this.userDataLoadedSub.unsubscribe();
  }

}
