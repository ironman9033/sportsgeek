import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmBoxComponent } from 'src/app/common/components/confirm-box/confirm-box.component';
import { LoadingComponent } from 'src/app/common/components/loading/loading.component';
import { SnackbarComponent } from 'src/app/common/components/snackbar/snackbar.component';
import { getErrorMessage, NO_RESP } from 'src/app/common/constants/error-message';
import { getSnackbarProperties } from 'src/app/common/constants/snackbar-properties';
import { MatchModel } from 'src/app/common/model/match/match-model';
import { TeamModel } from 'src/app/common/model/team/team-model';
import { VenueModel } from 'src/app/common/model/venue/venue';
import { MatchesService } from 'src/app/common/service/matches_service/matches.service';
import { TeamService } from 'src/app/common/service/team_service/team.service';
import { VenueService } from 'src/app/common/service/venue/venue.service';
import { MatchCRUDComponent } from '../CRUD/match-crud/match-crud.component';

@Component({
  selector: 'app-admin-manage-matches',
  templateUrl: './admin-manage-matches.component.html',
  styleUrls: ['./admin-manage-matches.component.css']
})
export class AdminManageMatchesComponent implements OnInit {

  matchData: MatchModel[] = [];
  teamData: TeamModel[] = [];
  venueData: VenueModel[] = [];

  displayedColumns: string[] = ['matchId','name', 'startDatetime', 'team1Logo', 'team1Short', 'team2Logo', 'team2Short', 'venue', 'minimumPoints', 'resultStatus', 'winnerTeamId', 'delete'];

  // 'team1','team1Id', 'team2', 'team2Id',

  dataSource: MatTableDataSource<MatchModel> = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private matchservice: MatchesService,
    private teamservice: TeamService,
    private venueservice:VenueService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  async ngOnInit() {

    this.matchData = await this.getMatches();
    // console.log(this.matchData);

    this.teamData = await this.getTeams();
    // console.log(this.teamData);

    this.venueData = await this.getVenue();
    // console.log(this.venueData);

    this.dataSource.data = this.matchData;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getResultStatus(matchId: any) {
    return this.matchData.find(obj => obj.matchId === matchId)?.resultStatus;
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

  async getMatches(): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
    let matchModel: MatchModel[] = [];
    let resp = null;
    try {
      resp = await this.matchservice.getAllMatches();
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

  async deleteMatch(matchData: MatchModel): Promise<any> {
    if (this.dialog.openDialogs.length == 0) {
      const dialogRef1 = this.dialog.open(ConfirmBoxComponent, {
        panelClass: 'no-padding-dialog',
        data: 'Think Twice Before Deleting'
      });
      const closeResp = await dialogRef1.afterClosed().toPromise();
      if (closeResp) {
        let panelClass = 'green';
        let snackbarMsg = '';
        let snackbarRef = null;
        const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
        // let matchModel: MatchModel[] = [];
        let msg;
        let resp = null;
        try {
          resp = await this.matchservice.deleteMatch(matchData.matchId);
          msg = resp.message;
          if (msg) {
            dialogRef.close();
            snackbarMsg = msg;
            let deletedId = this.matchData.findIndex(md => md.matchId == matchData.matchId);
            this.matchData.splice(deletedId,1);
            this.dataSource.data = this.matchData;
            // location.reload();
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

  openMatchForm() {
    const dialogRef = this.dialog.open(MatchCRUDComponent,
      { panelClass: 'no-padding-dialog', disableClose: true });
    dialogRef.afterClosed().toPromise().then(data => {
      if (data) {
        // this.matchData.push(data);
        // this.dataSource.data = this.matchData;
        // location.reload();

        let tempTeamData = this.teamData;
        let tempVenueData = this.venueData;
        let indexOfTempTeam1Data = tempTeamData.findIndex(i=> i.teamId == data.team1);
        let indexOfTempTeam2Data = tempTeamData.findIndex(i=> i.teamId == data.team2);
        let indexOfTempVenueData = tempVenueData.findIndex(i=> i.venueId == data.venueId);

        this.matchData.push(data);
          let volume = this.matchData.map((d) =>
            d.matchId == data.matchId ? {
              ...d,
              team1Id: data.team1,
              team1: tempTeamData[indexOfTempTeam1Data].name,
              team1Logo: tempTeamData[indexOfTempTeam1Data].teamLogo,
              team1Short: tempTeamData[indexOfTempTeam1Data].shortName,
              team2Id: data.team2,
              team2: tempTeamData[indexOfTempTeam2Data].name,
              team2Logo: tempTeamData[indexOfTempTeam2Data].teamLogo,
              team2Short: tempTeamData[indexOfTempTeam2Data].shortName,
              venue: tempVenueData[indexOfTempVenueData].name,
            } : d
          );

          this.dataSource.data = volume;
      }
    });
  }
  updateMatchForm(data: any) {
    const dialogRef = this.dialog.open(MatchCRUDComponent,
      { panelClass: 'no-padding-dialog', disableClose: true, data });
    dialogRef.afterClosed().toPromise().then(data => {
      if (data) {
        // this.matchData.push(data);
        // this.dataSource.data = this.matchData;

        let tempTeamData = this.teamData;
        let tempVenueData = this.venueData;
        let indexOfTempTeam1Data = tempTeamData.findIndex(i=> i.teamId == data.team1);
        let indexOfTempTeam2Data = tempTeamData.findIndex(i=> i.teamId == data.team2);
        let indexOfTempVenueData = tempVenueData.findIndex(i=> i.venueId == data.venueId);

          let volume = this.matchData.map((d) =>
            d.matchId == data.matchId ? {
              ...d,
              team1Id: data.team1,
              team1: tempTeamData[indexOfTempTeam1Data].name,
              team1Logo: tempTeamData[indexOfTempTeam1Data].teamLogo,
              team1Short: tempTeamData[indexOfTempTeam1Data].shortName,
              team2Id: data.team2,
              team2: tempTeamData[indexOfTempTeam2Data].name,
              team2Logo: tempTeamData[indexOfTempTeam2Data].teamLogo,
              team2Short: tempTeamData[indexOfTempTeam2Data].shortName,
              venue: tempVenueData[indexOfTempVenueData].name,
              minimumPoints: data.minimumPoints,
              startDatetime: data.startDatetime,
            } : d
          );

          this.dataSource.data = volume;
        // location.reload();
      }
    });
  }
}
