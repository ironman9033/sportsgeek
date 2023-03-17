import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingComponent } from 'src/app/common/components/loading/loading.component';
import { SnackbarComponent } from 'src/app/common/components/snackbar/snackbar.component';
import {
  getErrorMessage,
  NO_RESP,
} from 'src/app/common/constants/error-message';
import { place_bet_music } from 'src/app/common/constants/links';
import { getSnackbarProperties } from 'src/app/common/constants/snackbar-properties';
import { stringToColor } from 'src/app/common/constants/utils';
import { BotModel } from 'src/app/common/model/bot/BotModel';
import { CheckContestByUserAndMatchId } from 'src/app/common/model/bot/contestbyuserandmatchid';
import { MatchModel } from 'src/app/common/model/match/match-model';
import { UserModel } from 'src/app/common/model/user/user-model';
import { BotService } from 'src/app/common/service/bot/bot.service';
import { LoginstateService } from 'src/app/common/service/login_state/loginstate.service';
import { MatchesService } from 'src/app/common/service/matches_service/matches.service';
import { UserService } from 'src/app/common/service/user_service/user.service';
import { InsertUpdateContestComponent } from './insert-update-contest/insert-update-contest.component';

@Component({
  selector: 'app-betting-page',
  templateUrl: './betting-page.component.html',
  styleUrls: ['./betting-page.component.css'],
})
export class BettingPageComponent implements OnInit {

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

  teamShortName : any = {
    1: "CSK",
    2: "DC",
    3: "GT",
    4: "KKR",
    5: "LSG",
    6: "MI",
    7: "PBKS",
    8: "RR",
    9: "RCB",
    10: "SRH"
  }

  botData: BotModel[] = [];
  calc!: MatchModel;

  userData!: UserModel;
  checkk!: CheckContestByUserAndMatchId;
  oldPoints:any;

  displayedColumns: string[] = ['username', 'teamshortname', 'contestPoints'];

  dataSource: MatTableDataSource<BotModel> = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  matchId!: number;
  matchData!: MatchModel;
  team1Total: any;
  team2Total: any;
  selectedTeam: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private botservice: BotService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    private matchservice: MatchesService,
    private userservice: UserService,
    private loginStateService: LoginstateService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.route.params.subscribe((data) => {
      this.matchId = data.id;
    });
    this.calc = await this.getAllPlayerBetsByMatchIdForCalculation(
      this.matchId
    );

    this.botData = await this.getAllPlayerBetsByMatchId(this.matchId);
    // console.log(this.botData);

    this.dataSource.data = this.botData;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.matchData = await this.getMatchById(this.matchId);
    // console.log(this.matchData);

    this.checkMatchDate(this.matchData.startDatetime);

    this.checkk = await this.getPlayersBetByUserAndMatchId(
      this.loginState.userId,
      this.matchId
    );
    // console.log(this.checkk);
    this.selectedTeam = this.matchData.team1Id === this.checkk.teamId ? this.matchData.team1 : this.matchData.team2Id === this.checkk.teamId? this.matchData.team2 : 'N/A' ;

    this.userData = await this.getUsersById();
    // console.log(this.userData);

    this.team1Total = this.Team1TotalUsers(this.botData, this.matchData);
    this.team2Total = this.Team2TotalUsers(this.botData, this.matchData);
  }

  stringToColorFunction(color: any){
    return stringToColor(color);
  }


  checkMatchDate(dateSent: Date){
    // this.location.replaceState('');
    let currentDate = new Date();
    dateSent = new Date(dateSent);
    var diffMs = (dateSent.getTime() - currentDate.getTime()); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    // console.log(diffDays);
    const days = diffDays;
    // return  this.days;

    if (days >= 5 ) {
      this.router.navigate([this.loginState.role+`/match-list`]);
      let panelClass = 'red';
      let snackbarMsg = 'Match Out of Range ;-)';
      let snackbarRef = null;
      snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
        getSnackbarProperties(snackbarMsg, panelClass));
    }else if (days < 0) {
      this.router.navigate([this.loginState.role+`/match-list`]);
      let panelClass = 'red';
      let snackbarMsg = 'Match Out of Range ;-)';
      let snackbarRef = null;
      snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
        getSnackbarProperties(snackbarMsg, panelClass));
    }

  }

  Team1TotalUsers(inputs1: any, inputs2: any) {
    let counter = 0;
    for (const input1 of inputs1) {
      if (input1.teamShortName === inputs2?.team1Short) counter += 1;
    }
    return counter;
  }

  Team2TotalUsers(inputs1: any, inputs2: any) {
    let counter = 0;
    for (const input1 of inputs1) {
      if (input1.teamShortName === inputs2?.team2Short) counter += 1;
    }
    return counter;
  }

  async getUsersById(): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, {
      disableClose: true,
    });
    let userModel: UserModel[] = [];
    let resp = null;
    try {
      resp = await this.userservice.getUserById(this.loginState.userId);
      userModel = resp.body;
      if (userModel) {
        dialogRef.close();
        return userModel;
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
      snackbarRef = this.snackbar.openFromComponent(
        SnackbarComponent,
        getSnackbarProperties(snackbarMsg, panelClass)
      );
    }
    return [];
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async getMatchById(matchId: number): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, {
      disableClose: true,
    });
    let matchModel: MatchModel[] = [];
    let resp = null;
    try {
      resp = await this.matchservice.viewMatchById(matchId);
      matchModel = resp.body;
      if (matchModel) {
        dialogRef.close();
        return matchModel;
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
      snackbarRef = this.snackbar.openFromComponent(
        SnackbarComponent,
        getSnackbarProperties(snackbarMsg, panelClass)
      );
    }
    return [];
  }

  // GET ALL PLAYER BETS ON TEAM

  async getAllPlayerBetsByMatchId(matchId: number): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, {
      disableClose: true,
    });
    let botModel: BotModel[] = [];
    let resp = null;
    try {
      resp = await this.botservice.viewAllContestByMatchId(matchId);
      botModel = resp.body;
      this.findsum(botModel);
      if (botModel) {
        dialogRef.close();
        return botModel;
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
      snackbarRef = this.snackbar.openFromComponent(
        SnackbarComponent,
        getSnackbarProperties(snackbarMsg, panelClass)
      );
    }
    return [];
  }

  // CHECK IF PLAYER HAS PLACED BET

  async getPlayersBetByUserAndMatchId(
    userId: number,
    matchId: number
  ): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, {
      disableClose: true,
    });
    let botModel: BotModel[] = [];
    let resp = null;
    try {
      resp = await this.botservice.viewAllContestByUserAndMatchId(
        userId,
        matchId
      );
      botModel = resp.body;
      if (botModel) {
        dialogRef.close();
        return botModel;
      } else {
        snackbarMsg = NO_RESP;
        panelClass = 'red';
      }
    } catch (ex) {
      snackbarMsg = getErrorMessage(ex);
      panelClass = 'yellow';
    } finally {
      dialogRef.close();
    }
    if (snackbarMsg) {
      snackbarRef = this.snackbar.openFromComponent(
        SnackbarComponent,
        getSnackbarProperties(snackbarMsg, panelClass)
      );
    }
    return [];
  }

  //  ADD BETS AND UPDATE BETS

  async playAudio() {
    let audio = new Audio();
    audio.src = '';
    audio.load();
    audio.play();
  }

  loginState = this.loginStateService.getLoginState();
  un = this.loginState?.username;

  openInsertDialog() {
    const dialogRef = this.dialog.open(InsertUpdateContestComponent, {
      panelClass: 'no-padding-dialog',
      disableClose: true,
      data: { matchId: this.matchId },
    });
    dialogRef
      .afterClosed()
      .toPromise()
      .then((data) => {
        if (data) {
          // this.botData.push(data);
          // this.dataSource.data = this.botData;

          this.playAudio();
          this.botData.push(data);
          let volume = this.botData.map((d) =>
            d.contestId == data.contestId ? {
              ...d,
              contestPoints: data.contestPoints,
              firstName: this.userData.firstName,
              lastName: this.userData.lastName,
              teamShortName: this.teamShortName[data.teamId],
              username: this.userData.username
            } : d
          );

          this.userData.availablePoints -= data.contestPoints;
          this.oldPoints = data.contestPoints;
          this.dataSource.data = volume;
          this.botData = volume;
          this.checkk = data;
          this.team1points = 0;
          this.team2points = 0;
          this.findsum(volume);
          this.team1Total = this.Team1TotalUsers(volume, this.matchData);
          this.team2Total = this.Team2TotalUsers(volume, this.matchData);
          this.selectedTeam = this.matchData.team1Id === this.checkk.teamId ? this.matchData.team1 : this.matchData.team2Id === this.checkk.teamId? this.matchData.team2 : 'N/A' ;

          // location.reload();
        }
      });
  }

  openUpdateDialog(data: any) {
    const dialogRef = this.dialog.open(InsertUpdateContestComponent, {
      panelClass: 'no-padding-dialog',
      disableClose: true,
      data,
    });
    dialogRef
      .afterClosed()
      .toPromise()
      .then((data) => {
        if (data) {
          // this.botData.push(data);
          // this.dataSource.data = data;

          // this.dataSource.data.find((payload) => {
          //   if (payload.contestId == data.contestId) {
          //     let indexNo = this.botData.findIndex(q => q.contestId == data.contestId);
          //     this.botData.splice(indexNo,1);
          //     this.botData.push(data);
          //     this.dataSource.data = this.botData;
          //   }
          // });

          this.playAudio();
          let tempBotData = this.botData;
          let indexOfTempBotData = tempBotData.findIndex(i=> i.contestId == data.contestId);

          let volume = this.botData.map((d) =>
            d.contestId == data.contestId ? {
              ...d,
              contestPoints: data.contestPoints,
              firstName: tempBotData[indexOfTempBotData].firstName,
              lastName: tempBotData[indexOfTempBotData].lastName,
              teamShortName: this.teamShortName[data.teamId],
            } : d
          );

          if (this.oldPoints == null) {
            this.userData.availablePoints = this.userData.availablePoints + this.checkk.contestPoints - data.contestPoints;
          }else if(this.oldPoints != null){
          this.userData.availablePoints = this.userData.availablePoints + this.oldPoints - data.contestPoints;
          }
          this.oldPoints = data.contestPoints;
          this.dataSource.data = volume;
          this.botData = volume;
          this.team1points = 0;
          this.team2points = 0;
          this.findsum(volume);
          this.team1Total = this.Team1TotalUsers(volume, this.matchData);
          this.team2Total = this.Team2TotalUsers(volume, this.matchData);
          this.checkk = data;
          this.selectedTeam = this.matchData.team1Id === this.checkk.teamId ? this.matchData.team1 : this.matchData.team2Id === this.checkk.teamId? this.matchData.team2 : 'N/A' ;
          // location.reload();
        }
      });
  }

  // THIS IS FOR CALCULATION PURPOSE ONLY

  team1points = 0;
  team2points = 0;

  findsum(data: any) {
    data.forEach((element: any) => {
      if (element.teamShortName == this.calc.team1Short) {
        this.team1points += element.contestPoints;
      } else if (element.teamShortName == this.calc.team2Short)
        this.team2points += element.contestPoints;
    });
  }

  async getAllPlayerBetsByMatchIdForCalculation(matchId: number): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, {
      disableClose: true,
    });
    let matchModel: MatchModel[] = [];
    let resp = null;
    try {
      resp = await this.matchservice.viewMatchById(matchId);
      matchModel = resp.body;
      if (matchModel) {
        dialogRef.close();
        return matchModel;
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
      snackbarRef = this.snackbar.openFromComponent(
        SnackbarComponent,
        getSnackbarProperties(snackbarMsg, panelClass)
      );
    }
    return [];
  }

  getColorForTeam1() {
    return this.matchData && this.matchData.team1Id
      ? this.teamColor[this.matchData.team1Id]
      : this.teamColor.t1;
  }

  getColorForTeam2() {
    return this.matchData && this.matchData.team2Id
      ? this.teamColor[this.matchData.team2Id]
      : this.teamColor.t2;
  }

  getFontColorForTeam1() {
    return this.matchData && this.matchData.team1Id
      ? this.teamFontColor[this.matchData.team1Id]
      : this.teamFontColor.t1;
  }

  getFontColorForTeam2() {
    return this.matchData && this.matchData.team2Id
      ? this.teamFontColor[this.matchData.team2Id]
      : this.teamFontColor.t2;
  }

  getBorderColorForTeam1() {
    return this.matchData && this.matchData.team1Id
      ? this.borderTop[this.matchData.team1Id]
      : this.borderTop.t1;
  }

  getBorderColorForTeam2() {
    return this.matchData && this.matchData.team2Id
      ? this.borderTop[this.matchData.team2Id]
      : this.borderTop.t2;
  }
}
