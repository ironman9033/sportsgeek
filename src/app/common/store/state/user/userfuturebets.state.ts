import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { LoadingComponent } from 'src/app/common/components/loading/loading.component';
import { UserStaticticsService } from 'src/app/common/service/statistics/user-statictics.service';
import { UserFutureBets } from 'src/app/common/model/statistics/user-future-bets';
import { GetUserFB } from '../../actions/user/userfuturebets.action';

export class userFBStateModel {
  userFutureBets!: UserFutureBets[];
  userFutureBetsLoaded!: boolean;
  selectedUserFB!: UserFutureBets;
}

@State<userFBStateModel>({
  name: 'userFB',
  defaults: {
    userFutureBets: [],
    userFutureBetsLoaded: false,
    selectedUserFB: null!,
  },
})
@Injectable()
export class UserFBState {
  constructor(private userstatsservice: UserStaticticsService,private dialog: MatDialog) {}

  @Selector()
  static getUserFB(state: userFBStateModel) {
    return state.userFutureBets;
  }

  @Selector()
  static UserLoaded(state: userFBStateModel) {
    return state.userFutureBetsLoaded;
  }

  @Action(GetUserFB)
  getUsers({ getState, setState }: StateContext<userFBStateModel>) {
    const dialogRef = this.dialog.open(LoadingComponent, {
      disableClose: true,
    });
    return this.userstatsservice.getUserFutureBetsNGXS().pipe(
      tap((res) => {
        const state = getState();
        setState({
          ...state,
          userFutureBets: res,
          userFutureBetsLoaded: true,
        });
        dialogRef.close();
      })
    );
  }
}
