import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { LoadingComponent } from 'src/app/common/components/loading/loading.component';
import { UserStats } from 'src/app/common/model/statistics/userstats';
import { GetUserStats } from '../../actions/user/userstats.action';
import { UserStaticticsService } from 'src/app/common/service/statistics/user-statictics.service';

export class userStatisticsStateModel {
  userStats!: UserStats[];
  userStatsLoaded!: boolean;
  selectedUserStats!: UserStats;
}

@State<userStatisticsStateModel>({
  name: 'userstats',
  defaults: {
    userStats: [],
    userStatsLoaded: false,
    selectedUserStats: null!,
  },
})
@Injectable()
export class UserStatisticsState {
  constructor(private userstatsservice: UserStaticticsService,private dialog: MatDialog) {}

  @Selector()
  static getUserStatsData(userstatemodel: userStatisticsStateModel) {
    return userstatemodel.userStats;
  }

  @Selector()
  static UserStatsLoaded(userstatemodel: userStatisticsStateModel) {
    return userstatemodel.userStatsLoaded;
  }

  @Action(GetUserStats)
  getUsers({ getState, setState }: StateContext<userStatisticsStateModel>) {
    const dialogRef = this.dialog.open(LoadingComponent, {
      disableClose: true,
    });
    return this.userstatsservice.getUserStatsNGXS().pipe(
      tap((res) => {
        const state = getState();
        setState({
          ...state,
          userStats: res,
          userStatsLoaded: true,
        });
        dialogRef.close();
      })
    );
  }
}
