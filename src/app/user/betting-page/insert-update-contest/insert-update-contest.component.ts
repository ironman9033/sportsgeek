import { Inject, SimpleChanges } from '@angular/core';
import { Optional } from '@angular/core';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoadingComponent } from 'src/app/common/components/loading/loading.component';
import { SnackbarComponent } from 'src/app/common/components/snackbar/snackbar.component';
import { getErrorMessage, NO_RESP } from 'src/app/common/constants/error-message';
import { csk, dc, gt, kkr, lsg, mi, pbks, rcb, rr, srh } from 'src/app/common/constants/links';
import { getSnackbarProperties } from 'src/app/common/constants/snackbar-properties';
import { BotModel } from 'src/app/common/model/bot/BotModel';
import { CheckContestByUserAndMatchId } from 'src/app/common/model/bot/contestbyuserandmatchid';
import { MatchModel } from 'src/app/common/model/match/match-model';
import { UserModel } from 'src/app/common/model/user/user-model';
import { BotService } from 'src/app/common/service/bot/bot.service';
import { LoginstateService } from 'src/app/common/service/login_state/loginstate.service';
import { MatchesService } from 'src/app/common/service/matches_service/matches.service';
import { UserService } from 'src/app/common/service/user_service/user.service';

@Component({
  selector: 'app-insert-update-contest',
  templateUrl: './insert-update-contest.component.html',
  styleUrls: ['./insert-update-contest.component.css']
})
export class InsertUpdateContestComponent implements OnInit {

  teamLoader:any = {
    1: csk, //csk
    2: dc, //dc
    3: gt, //gt
    4: kkr, //kkr
    5: lsg, //lsg
    6: mi, //mi
    7: pbks, //pk
    8: rr, //rr
    9: rcb, //rcb
    10: srh, //srh
    //in case if the ids of the above teams changes, default colors will be used
    t1: 'pink', //
    t2: 'silver' //
  };
  selectedTeamId: any = null;

  userForm!: FormGroup;
  botData!: BotModel;
  botForm!: FormGroup;
  checkk!: CheckContestByUserAndMatchId;
  matchData!: MatchModel;
  userData!: UserModel;
  isloading = false;

  constructor(
    private fb: FormBuilder,
    private loginStateService: LoginstateService,
    private botservice: BotService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private userservice: UserService,
    private matchservice: MatchesService,
    private matDialogRef: MatDialogRef<InsertUpdateContestComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: BotModel
  ) {
    this.botData = data;
    if (data) {
      this.botForm = this.fb.group({
        // contestId: [{ value: this.botData.contestId, disabled: true }],

        // userId: [{value: localStorage.getItem('userId'),disabled:true}],

        matchId: [{ value: this.data.matchId, disabled: true }],

        selectTeam: [this.data.teamId, [Validators.required]],

        contestPoints: [this.data.contestPoints, [Validators.required, Validators.pattern('^[1-9]{1,}[0-9]{1,3}$')]]

      });
    } else {
      this.botForm = this.fb.group({

        // contestId: [{  disabled: true }],

        // userId: [{value: localStorage.getItem('userId'),disabled:true}],

        matchId: [{ value: this.data?.matchId, disabled: true }],

        selectTeam: ['', [Validators.required]],

        contestPoints: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(4), Validators.pattern('^[1-9][0-9]*$')]]

      });
    }
  }

  // mPoints: any;
  // changedValue : any;
  AvailableContestPoints:any;

  async ngOnInit() {
    this.matchData = await this.getMatchById(this.data.matchId);
    // console.log(this.matchData);

    this.checkk = await this.getPlayersBetByUserAndMatchId(this.loginState.userId, this.data.matchId);
    // console.log(this.checkk);

    this.userData = await this.getUsersById();
    // console.log(this.userData);

    // this.mPoints = this.matchData.minimumPoints;
    // console.log('this is minimum points : ' +this.mPoints);

    // this.botForm.get('contestPoints')?.valueChanges.subscribe(value => {
    //   this.changedValue = value;

    //   console.log('changed Value : '+this.changedValue);
    // });

    // this.n();
    this.minPointsValidator(this.matchData.minimumPoints);

    this.AvailableContestPoints = this.botData?.contestPoints + this.userData?.availablePoints;
  }

  minPointsValidator(minimumPoint:any){
    const f = this.botForm.controls.contestPoints;
    let cp:any = this.botForm.get('contestPoints')?.value;
    minimumPoint = this.matchData.minimumPoints;
    if (cp < minimumPoint) {
      f.setErrors([Validators.required]);
    }
  }

  availableContestPointsValidator(availablePoints:any){
    const f = this.botForm.controls.contestPoints;
    let cp:any = this.botForm.get('contestPoints')?.value;
    let userAvailablePoints = this.userData.availablePoints;
    let userContestPointsOfCurrentMatch = this.botData.contestPoints;
    availablePoints = userAvailablePoints + userContestPointsOfCurrentMatch;
    if (cp > availablePoints) {
      f.setErrors([Validators.required]);
    }
  }

  availablePointsValidator(availablePoints:any){
    const f = this.botForm.controls.contestPoints;
    let cp:any = this.botForm.get('contestPoints')?.value;
    let userAvailablePoints = this.userData.availablePoints;
    if (cp > userAvailablePoints) {
      f.setErrors([Validators.required]);
    }
  }

  // n() {
  //   const cp = this.botForm.get('contestPoints');
  //   this.botForm.get('contestPoints')?.valueChanges.subscribe(value => {
  //     console.log('changed Value : ' + value);
  //     if (value < this.matchData.minimumPoints) {
  //       let f=this.matchData.minimumPoints;
  //       cp?.setValidators([Validators.required]);
  //     }else if(value > this.matchData.minimumPoints){
  //       cp?.clearValidators();
  //     }
  //     cp?.updateValueAndValidity();
  //   });

    // if (this.mPoints > this.changedValue) {
    //   this.botForm.controls['constestPoints']?.setErrors({invalidNumber:true});
    // }else{
    //   this.botForm.controls['constestPoints']?.setErrors(null);
    // }
  // }

  // async ngOnChanges(changes: SimpleChanges){
  //   const previousMatchData = <MatchModel>changes.matchData.previousValue;
  //   const currentMatchData = <MatchModel>changes.matchData.currentValue;

  //   console.log('Previous : '+ (previousMatchData ? previousMatchData.minimumPoints : 'NULL'));
  //   console.log('Current : ' +currentMatchData.minimumPoints);

  // }

  async getUsersById(): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
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
      snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
        getSnackbarProperties(snackbarMsg, panelClass));
    }
    return [];
  }

  async getMatchById(matchId: number): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
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
      snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
        getSnackbarProperties(snackbarMsg, panelClass));
    }
    return [];
  }

  // CHECK IF PLAYER HAS PLACED BET

  async getPlayersBetByUserAndMatchId(userId: number, matchId: number): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
    let botModel: BotModel[] = [];
    let resp = null;
    try {
      resp = await this.botservice.viewAllContestByUserAndMatchId(userId, matchId);
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
      panelClass = 'red';
    } finally {
      dialogRef.close();
    }
    // if (snackbarMsg) {
    //   snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
    //     getSnackbarProperties(snackbarMsg, panelClass));
    // }
    return [];
  }

  reload() {
    location.reload();
  }

  get form() {
    return this.botForm.controls;
  }

  reset(field: string) {
    this.form[field].setValue('');
  }

  loginState = this.loginStateService.getLoginState();

  async PlaceBet() {
    if (this.botForm.valid) {
      if (!this.botData.contestId) {
        this.botData = new BotModel();
        this.botData.contestId = 0;
        this.botData.userId = this.loginState.userId;
        this.botData.matchId = this.data.matchId;
        this.botData.contestPoints = this.form.contestPoints.value;
        this.botData.teamId = this.form.selectTeam.value;
        this.selectedTeamId = this.form.selectTeam.value;
        // this.botData.winningPoints = 0;

        let panelClass = 'green';
        let snackbarMsg = '';
        let snackbarRef = null;
        this.snackbar.dismiss();
        // const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
        this.isloading = true;
        let resp = null;
        try {
          resp = await this.botservice.addBet(this.botData);
          this.botData = resp.body;
          if (this.botData != null)
          // && this.botData.contestId > 0
          {
            snackbarMsg = 'Bet successfully Placed!';
            this.matDialogRef.close(this.botData);
            this.isloading = false;
            // this.reload();
          } else {
            snackbarMsg = NO_RESP;
            panelClass = 'red';
          }
        } catch (ex) {
          snackbarMsg = getErrorMessage(ex);
          panelClass = 'red';
        } finally {
          // dialogRef.close();
          this.isloading = false;
          if (snackbarMsg) {
            snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
              getSnackbarProperties(snackbarMsg, panelClass));
          }
        }
      } else {

        this.botData = new BotModel();
        this.botData.contestId = this.botData.contestId;
        this.botData.userId = this.loginState.userId;
        this.botData.matchId = this.data.matchId;
        this.botData.teamId = this.form.selectTeam.value;
        this.botData.contestPoints = this.form.contestPoints.value;
        this.selectedTeamId = this.form.selectTeam.value;

        let panelClass = 'green';
        let snackbarMsg = '';
        let snackbarRef = null;
        this.snackbar.dismiss();
        // const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });

        this.isloading = true;
        let resp = null;
        try {
          resp = await this.botservice.updateBet(this.data.contestId, this.botData);
          this.botData = resp.body;
          if (this.botData != null) {
            snackbarMsg = 'Bet successfully updated!';
            this.matDialogRef.close(this.botData);
            this.isloading = false;
            // this.reload();
          } else {
            snackbarMsg = NO_RESP;
            panelClass = 'red';
          }
        } catch (ex) {
          snackbarMsg = getErrorMessage(ex);
          panelClass = 'red';
        } finally {
          // dialogRef.close();
          this.isloading = false;
          if (snackbarMsg) {
            snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
              getSnackbarProperties(snackbarMsg, panelClass));
          }
        }
      }
    }
  }

  closeDialogBox() {
    this.matDialogRef.close();
  }

}
