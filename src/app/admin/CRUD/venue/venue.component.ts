import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoadingComponent } from 'src/app/common/components/loading/loading.component';
import { SnackbarComponent } from 'src/app/common/components/snackbar/snackbar.component';
import { getErrorMessage, NO_RESP } from 'src/app/common/constants/error-message';
import { getSnackbarProperties } from 'src/app/common/constants/snackbar-properties';
import { VenueModel } from 'src/app/common/model/venue/venue';
import { VenueService } from 'src/app/common/service/venue/venue.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {

  venueForm!: FormGroup;
  venueData!: VenueModel;

  constructor(
    private fb: FormBuilder,
    private venueservice: VenueService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private matDialogRef: MatDialogRef<VenueComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: VenueModel
  ) {
    this.venueData = data;
    if (data) {
      this.venueForm = this.fb.group({
        venueId: [{ value: this.data.venueId, disabled: true }],

        name: [this.data.name, [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern('[a-zA-Z ]+')]],

      });
    } else {
      this.venueForm = this.fb.group({

        venueId: [{ value: '', disabled: true }],

        name: ['', [Validators.required, Validators.minLength(5) , Validators.maxLength(50), Validators.pattern('[a-zA-Z ]+')]],

      });
    }
  }

  reload() {
    location.reload();
  }

  ngOnInit(): void {}

  get form() {
    return this.venueForm.controls;
  }

  reset(field: string) {
    this.form[field].setValue('');
  }

  async addVenue() {
    // console.log(this.form.validators);

    if (this.venueForm.valid) {
      if (!this.venueData) {
        this.venueData = new VenueModel();

        var formData: any = new FormData();
        formData.append("name", this.form.name.value);

        let panelClass = 'green';
        let snackbarMsg = '';
        let snackbarRef = null;
        this.snackbar.dismiss();
        const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
        let resp = null;
        try {
          resp = await this.venueservice.addVenue(formData);
          this.venueData = resp.body;
          if (this.venueData != null && this.venueData.venueId > 0) {
            snackbarMsg = 'Venue successfully added!';
            this.matDialogRef.close(this.venueData);
            // this.reload();
          } else {
            snackbarMsg = NO_RESP;
            panelClass = 'red';
          }
        } catch (ex) {
          snackbarMsg = getErrorMessage(ex);
          panelClass = 'red';
        } finally {
          dialogRef.close();
          if (snackbarMsg) {
            snackbarRef = this.snackbar.openFromComponent(SnackbarComponent,
              getSnackbarProperties(snackbarMsg, panelClass));
          }
        }
      }
      else {

        var formData: any = new FormData();
        formData.append("name", this.form.name.value);

        let panelClass = 'green';
        let snackbarMsg = '';
        let snackbarRef = null;
        this.snackbar.dismiss();
        const dialogRef = this.dialog.open(LoadingComponent, { disableClose: true });
        let resp = null;
        try {
          resp = await this.venueservice.updateVenue(this.venueData.venueId,formData);
          this.venueData = resp.body;
          if (this.venueData != null) {
            snackbarMsg = 'Venue successfully updated!';
            this.matDialogRef.close(this.venueData);
          } else {
            snackbarMsg = NO_RESP;
            panelClass = 'red';
          }
        } catch (ex) {
          snackbarMsg = getErrorMessage(ex);
          panelClass = 'red';
        } finally {
          dialogRef.close();
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
