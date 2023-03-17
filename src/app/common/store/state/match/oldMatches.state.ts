import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { LoadingComponent } from 'src/app/common/components/loading/loading.component';
import { MatchModel } from 'src/app/common/model/match/match-model';
import { MatchesService } from 'src/app/common/service/matches_service/matches.service';
import { GetOldMatch, SetOldSelectedMatch } from '../../actions/match/oldmatch.action';

export class oldMatchStateModel {
  oldmatch!: MatchModel[];
  oldmatchLoaded!: boolean;
  selectedOldMatch!: MatchModel;
}

@State<oldMatchStateModel>({
  name: 'oldmatches',
  defaults: {
    oldmatch: [],
    oldmatchLoaded: false,
    selectedOldMatch: null!,
  },
})
@Injectable()
export class OldMatchState {
  constructor(private ms: MatchesService, private dialog: MatDialog) {}

  @Selector()
  static getOldMatchData(oldmatchstate: oldMatchStateModel) {
    return oldmatchstate.oldmatch;
  }

  @Selector()
  static OldMatchLoaded(oldmatchloadedstate: oldMatchStateModel) {
    return oldmatchloadedstate.oldmatchLoaded;
  }

  @Action(GetOldMatch)
  getOldMatches({ getState, setState }: StateContext<oldMatchStateModel>) {
    const dialogRef = this.dialog.open(LoadingComponent, {
      disableClose: true,
    });
    return this.ms.getAllOldMatchesNGXS().pipe(
      tap((res) => {
        const oldmatchstate = getState();
        setState({
          ...oldmatchstate,
          oldmatch: res,
          oldmatchLoaded: true,
        });
        dialogRef.close();
      })
    );
  }

  @Selector()
  static selectedOldMatch(oldmatchstate: oldMatchStateModel) {
    return oldmatchstate.selectedOldMatch;
  }

  @Action(SetOldSelectedMatch)
  setOldSelectedMatch(
    { getState, setState }: StateContext<oldMatchStateModel>,
    { matchId }: SetOldSelectedMatch
  ) {
    const state = getState();

    let matchList = state.oldmatch;

    // console.log('INDEX', index);
    const index = matchList.findIndex((findId) => findId.matchId === matchId);
    // console.log('SDSDSDSD', matchList[matchId]);

    setState({
      ...state,
      selectedOldMatch: matchList[index],
    });
  }
}
