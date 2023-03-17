import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { ChangePasswordComponent } from 'src/app/common/components/change-password/change-password.component';
import { ConfirmBoxComponent } from 'src/app/common/components/confirm-box/confirm-box.component';
import { LoadingComponent } from 'src/app/common/components/loading/loading.component';
import { SnackbarComponent } from 'src/app/common/components/snackbar/snackbar.component';
import { getErrorMessage, NO_RESP } from 'src/app/common/constants/error-message';
import { profile } from 'src/app/common/constants/links';
import { getSnackbarProperties } from 'src/app/common/constants/snackbar-properties';
import { UserFutureBets } from 'src/app/common/model/statistics/user-future-bets';
import { UsersWinningLosingModel } from 'src/app/common/model/statistics/users-winning-losing-points';
import { UserStats } from 'src/app/common/model/statistics/userstats';
import { UserModel } from 'src/app/common/model/user/user-model';
import { LoginstateService } from 'src/app/common/service/login_state/loginstate.service';
import { UserStaticticsService } from 'src/app/common/service/statistics/user-statictics.service';
import { UserService } from 'src/app/common/service/user_service/user.service';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';

@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.css']
})
export class ViewUserProfileComponent implements OnInit {

  profile = profile;
  userData!: UserModel;
  userStats: UserStats[] = [];
  userFutureBets:UserFutureBets[] = [];

  usersWinningLosingPoints!:UsersWinningLosingModel;

  showForm:boolean = false;

  // newform()
  // {
  //   this.showForm =!this.showForm;
  // }

  constructor(
    private userservice: UserService,
      private dialog: MatDialog,
      private snackbar: MatSnackBar,
      private userstats:UserStaticticsService,
      public loginStateService: LoginstateService
  ) { }

  async ngOnInit() {

    // this.userFutureBets = await this.getUsersFutureContest();
    // console.log(this.userFutureBets);

    // this.userStats = await this.getUserStats();
    // console.log(this.userStats);

    this.userData = await this.getUsers();
    // console.log(this.userData);

    this.usersWinningLosingPoints = await this.getUserWinningAndLosingPoints();
    // console.log(this.usersWinningLosingPoints);
  }

  findsum(data:any){
    data.forEach((element:any) => {
      let obj = this.userFutureBets.find(o => o.userId == element.userId);
      if(obj)
      element.availablePoints += obj.contestPoints;
    });
  }

  // GET USERS FUTURE BETS AND CURRENT POINTS

  // a= this.userStats.find(data => data.userId == this.userId)?.availablePoints;

  // const index = this.userStats.findIndex(data => data.userId == this.userId);
  // this.userStats[index].availablePoints;

  async RemoveProfilePicture(): Promise<any> {
    if (this.dialog.openDialogs.length == 0) {
      const dialogRef1 = this.dialog.open(ConfirmBoxComponent, {
        panelClass: 'no-padding-dialog',
        data: 'Are you sure you want to remove?'
      });
      const closeResp = await dialogRef1.afterClosed().toPromise();
      if (closeResp) {
        let panelClass = 'green';
        let snackbarMsg = '';
        let snackbarRef = null;
        const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
        // let userModel: UserModel[] = [];
        let msg;
        let resp = null;
        try {
          resp = await this.userservice.deleteProfilePic(this.userData.userId);
          msg = resp.body.message;
          if (msg) {
            snackbarMsg = msg;
            dialogRef.close();
            location.reload();
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
    }
  }

  async getUserStats(): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
    let userModel: UserStats[] = [];
    let resp = null;
    try {
      resp = await this.userstats.getUserStatsById(this.userId);
      userModel = resp.body;
      this.findsum(userModel);
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

  // USERS FUTURE Bet

  async getUsersFutureContest(): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
    let userFutureBets: UserFutureBets[] = [];
    let resp = null;
    try {
      resp = await this.userstats.getUserFutureBetsById(this.userId);
      userFutureBets = resp.body;
      if (userFutureBets) {
        dialogRef.close();
        return userFutureBets;
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


  loginState = this.loginStateService.getLoginState();
  userId = this.loginState?.userId;

  async getUsers(): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
    let userModel: UserModel[] = [];
    let resp = null;
    try {
      resp = await this.userservice.getUserById(this.userId);
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

  // GET USER STATISTICS

  async getUserWinningAndLosingPoints(): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
    let usersWinningLosingPoints: UsersWinningLosingModel[] = [];
    let resp = null;
    try {
      resp = await this.userstats.getUserWinningLosingPoint(this.userId);
      usersWinningLosingPoints = resp.body;
      if (usersWinningLosingPoints) {
        dialogRef.close();
        return usersWinningLosingPoints;
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

  reload() {
    location.reload();
  }

  openUpdateUserProfileForm(data: UserModel) {
    const dialogRef = this.dialog.open(UpdateProfileComponent,
      { panelClass: 'no-padding-dialog', disableClose: true, data });
    dialogRef.afterClosed().toPromise().then(data => {
      if (data) {
        this.reload();

        // this.userData.firstName = data.firstName;
        // this.userData.lastName = data.lastName;
        // this.userData.email = data.email;
        // this.userData.mobileNumber = data.mobileNumber;
        // if (this.userData.profilePicture !== data.profilePicture) {
        //   this.userData.profilePicture = data.profilePicture;

        // }else{

        // }

      }
    });
  }

  openUpdateUserPasswordForm() {
    const dialogRef = this.dialog.open(ChangePasswordComponent,
      { panelClass: 'no-padding-dialog', disableClose: true });
    dialogRef.afterClosed().toPromise().then(data => {
      if (data) {
        this.reload();
      }
    });
  }

}
