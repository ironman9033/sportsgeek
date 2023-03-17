import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { LoadingComponent } from 'src/app/common/components/loading/loading.component';
import { SnackbarComponent } from 'src/app/common/components/snackbar/snackbar.component';
import { getErrorMessage, NO_RESP } from 'src/app/common/constants/error-message';
import { stadium } from 'src/app/common/constants/links';
import { getSnackbarProperties } from 'src/app/common/constants/snackbar-properties';
import { MatchModel } from 'src/app/common/model/match/match-model';
import { UpcomingMatch } from 'src/app/common/model/match/upcomingMatches';
import { LoginstateService } from 'src/app/common/service/login_state/loginstate.service';
import { MatchesService } from 'src/app/common/service/matches_service/matches.service';
import { GetUpcomingMatch } from 'src/app/common/store/actions/match/upcomingmatch.action';
import { UpcomingMatchState } from 'src/app/common/store/state/match/upcomingMatches.state';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit, OnDestroy {

  teamColor:any = {
    1: "#ff0", //csk
    2: "#2561ae", //dc
    3: "#00416a", //gt
    4: "#7300ab", //kkr
    5: "#ace5ee", //lsg
    6: "#004f91", //mi
    7: "#ed1f27", //pk
    8: "RGB(37 ,74 ,165)", //rr
    9: "#d5152c", //rcb
    10: "#f7a721", //srh
    //in case if the ids of the above teams changes, default colors will be used
    t1: 'pink', //
    t2: 'silver' //
  };

  teamFontColor:any = {
    1: "black", //csk
    2: "#fff", //dc
    3: "#fff", //gt
    4: "#fff", //kkr
    5: "black", //lsg
    6: "#fff", //mi
    7: "#fff", //pk
    8: "white", //rr
    9: "#fff", //rcb
    10: "black", //srh
    //in case if the ids of the above teams changes, default colors will be used
    t1: 'black', //
    t2: 'black' //
  }

  borderTop:any = {
    1: "5px solid #ef9b0f", //csk
    2: "5px solid #4B9CD3", //dc
    3: "5px solid #1d2951", //gt
    4: "5px solid #430064", //kkr
    5: "5px solid #9bc4e2", //lsg
    6: "5px solid blue", //mi
    7: "5px solid #af002a", //pk
    8: "5px solid #1877F2", //rr
    9: "5px solid #800000", //rcb
    10: "5px solid #F05E23", //srh
    //in case if the ids of the above teams changes, default colors will be used
    t1: 'pink', //
    t2: 'silver' //
  };

  stadium = stadium;
  matchData!: UpcomingMatch[];
  clearButton = false;
  searchTitle = 'Place Bet on the upcoming Matches!';
  days5:any;

  @Select(UpcomingMatchState.getUpcomingMatchData)
  matchData$!: Observable<UpcomingMatch[]>;

  @Select(UpcomingMatchState.upcomingMatchLoaded)
  upcomingmatchLoaded$!: Observable<boolean>;

  upcomingmatchLoadedSub!: Subscription;

  constructor(
    private matchservice: MatchesService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
    private loginStateService: LoginstateService,
    private store: Store
  ) { }

  async ngOnInit() {
    this.matchData = await this.getMatchDetails();
    // console.log(this.matchData);

    this.matchData$.subscribe((res) => {
      this.matchData = res;
    });
  }

  async getMatchDetails(): Promise<any> {
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

  // getColorForTeam1(){
  //   return this.matchData && this.matchData.team1Id ? this.teamColor[this.matchData.team1Id] : this.teamColor.t1;
  // }

  // getColorForTeam2(){
  //   return this.matchData && this.matchData.team2Id ? this.teamColor[this.matchData.team2Id] : this.teamColor.t2;
  // }

  loginState = this.loginStateService.getLoginState();
  role = this.loginState?.role;

  gotoBettingPage(id:any,dateSent: Date){
    // this.location.replaceState('');
    let currentDate = new Date();
    dateSent = new Date(dateSent);
    var diffMs = (dateSent.getTime() - currentDate.getTime()); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    // console.log(diffDays);
    const days = diffDays;
    // return  this.days;

    if (days < 5 ) {
      this.router.navigate([this.role+`/match-list/betting-page/${id}`]);
    }else{
      let panelClass = 'yellow';
    let snackbarMsg = 'We Understand your Curiosity! But this Match is out of range';
    let snackbarRef = null;
    snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
      getSnackbarProperties(snackbarMsg, panelClass));
    }
  }

  async ngOnDestroy() {
    this.upcomingmatchLoadedSub.unsubscribe();
  }
}
