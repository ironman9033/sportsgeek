import { Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { MatchesService } from 'src/app/common/service/matches_service/matches.service';
import { tap } from 'rxjs/operators';
import { GetUpcomingMatch, SetUpcomingSelectedMatch } from '../../actions/match/upcomingmatch.action';
import { UpcomingMatch } from 'src/app/common/model/match/upcomingMatches';
import { LoadingComponent } from 'src/app/common/components/loading/loading.component';
import { MatDialog } from '@angular/material/dialog';

export class upcomingmatchStateModel {
  upcomingmatch!: UpcomingMatch[];
  upcomingmatchLoaded!: boolean;
  upcomingselectedMatch!: UpcomingMatch;
}

@State<upcomingmatchStateModel>({
  name: 'upcomingmatches',
  defaults: {
    upcomingmatch: [],
    upcomingmatchLoaded: false,
    upcomingselectedMatch: null!,
  },
})
@Injectable()
export class UpcomingMatchState {
  constructor(private ms: MatchesService,private dialog: MatDialog) {}

  @Selector()
  static getUpcomingMatchData(upcomingmatchstate: upcomingmatchStateModel) {
    return upcomingmatchstate.upcomingmatch;
  }

  @Selector()
  static upcomingMatchLoaded(
    upcomingmatchloadedstate: upcomingmatchStateModel
  ) {
    return upcomingmatchloadedstate.upcomingmatchLoaded;
  }

  @Action(GetUpcomingMatch)
  getUpcomingMatches({
    getState,
    setState,
  }: StateContext<upcomingmatchStateModel>) {
    // const dialogRef = this.dialog.open(LoadingComponent, {
    //   disableClose: false,
    // });
    return this.ms.getAllUpcomingMatchesNGXS().pipe(
      tap((res) => {
        const upcomingmatchstate = getState();
        setState({
          ...upcomingmatchstate,
          upcomingmatch: res,
          upcomingmatchLoaded: true,
        });
        // dialogRef.close();
      })
    );
  }

  @Selector()
  static selectedUpcomingMatch(upcomingmatchstate: upcomingmatchStateModel) {
    return upcomingmatchstate.upcomingselectedMatch;
  }

  @Action(SetUpcomingSelectedMatch)
  setSelectedUpcomingMatch(
    { getState, setState }: StateContext<upcomingmatchStateModel>,
    { matchId }: SetUpcomingSelectedMatch
  ) {
    const dialogRef = this.dialog.open(LoadingComponent, {
      disableClose: true,
    });
    const upcomingmatchstate = getState();
    let matchList = upcomingmatchstate.upcomingmatch;
    const index = matchList.findIndex((findId) => findId.matchId == matchId);
    // console.log('INDEX',matchList[index]);

    setState({
      ...upcomingmatchstate,
      upcomingselectedMatch: matchList[index],
    });
    dialogRef.close();
  }

}
