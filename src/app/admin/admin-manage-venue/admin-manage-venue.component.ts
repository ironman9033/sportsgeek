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
import { VenueModel } from 'src/app/common/model/venue/venue';
import { VenueService } from 'src/app/common/service/venue/venue.service';
import { VenueComponent } from '../CRUD/venue/venue.component';

@Component({
  selector: 'app-admin-manage-venue',
  templateUrl: './admin-manage-venue.component.html',
  styleUrls: ['./admin-manage-venue.component.css']
})
export class AdminManageVenueComponent implements OnInit {

  venueData: VenueModel[] = [];

  displayedColumns: string[] = ['venueId', 'name', 'delete'];

  dataSource: MatTableDataSource<VenueModel> = new MatTableDataSource();
  // dataSource = new MatTableDataSource<RechargeModel>(this.venueData);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private venueService: VenueService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  async ngOnInit() {
    this.venueData = await this.getVenue();
    console.log(this.venueData);

    this.dataSource.data = this.venueData;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async deleteVenue(venueData: VenueModel): Promise<any> {
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
        // let recharegeModel: RechargeModel[] = [];
        let msg;
        let resp = null;
        try {
          resp = await this.venueService.deleteVenue(venueData.venueId);
          msg = resp.body.message;
          if (msg) {
            dialogRef.close();
            snackbarMsg = msg;
            // location.reload();
            let deletedId = this.venueData.findIndex(md => md.venueId == venueData.venueId);
            this.venueData.splice(deletedId,1);
            this.dataSource.data = this.venueData;
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

  async getVenue(): Promise<any> {
    let panelClass = 'green';
    let snackbarMsg = '';
    let snackbarRef = null;
    const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
    let VenueModel: VenueModel[] = [];
    let resp = null;
    try {
      resp = await this.venueService.getAllVenue();
      VenueModel = resp.body;
      if (VenueModel) {
        dialogRef.close();
        return VenueModel;
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


  openVenueForm() {
    const dialogRef = this.dialog.open(VenueComponent,
      { panelClass: 'no-padding-dialog', disableClose: true });
    dialogRef.afterClosed().toPromise().then(data => {
      if (data) {
        this.venueData.push(data);
        this.dataSource.data = this.venueData;
      }
    });
  }
  updateVenueForm(data: any) {
    const dialogRef = this.dialog.open(VenueComponent,
      { panelClass: 'no-padding-dialog', disableClose: true, data });
    dialogRef.afterClosed().toPromise().then(data => {
      if (data) {
        // let volume = this.venueData.map((d) =>
        //     d.teamId == data.teamId ? {
        //       ...d,
        //       name: data.name,
        //       shortName: data.shortName,
        //       teamLogo: data.teamLogo,
        //     } : d
        //   );

          this.dataSource.data = data;
      }
    });
  }

}
