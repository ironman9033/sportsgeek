import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { MatchModel } from 'src/app/common/model/match/match-model';
import { MatchesService } from 'src/app/common/service/matches_service/matches.service';
import { GetMatch, SetSelectedMatch } from '../../actions/match/matches.action';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { LoadingComponent } from 'src/app/common/components/loading/loading.component';

export class matchStateModel {
  match!: MatchModel[];
  matchLoaded!: boolean;
  selectedMatch!: MatchModel;
}

@State<matchStateModel>({
  name: 'matches',
  defaults: {
    match: [],
    matchLoaded: false,
    selectedMatch: null!,
  },
})
@Injectable()
export class MatchState {
  constructor(private ms: MatchesService,private dialog: MatDialog) {}

  @Selector()
  static getMatchData(state: matchStateModel) {
    return state.match;
  }

  @Selector()
  static MatchLoaded(state: matchStateModel) {
    return state.matchLoaded;
  }

  @Action(GetMatch)
  getMatches({ getState, setState }: StateContext<matchStateModel>) {
    const dialogRef = this.dialog.open(LoadingComponent, {
      disableClose: true,
    });
    return this.ms.getAllMatchesNGXS().pipe(
      tap((res) => {
        const state = getState();
        setState({
          ...state,
          match: res,
          matchLoaded: true,
        });
        dialogRef.close();
      })
    );
  }


  @Selector()
  static selectedMatch(state: matchStateModel) {
    return state.selectedMatch;
  }

  @Action(SetSelectedMatch)
  setSelectedMatch(
    { getState, setState }: StateContext<matchStateModel>,
    { matchId }: SetSelectedMatch
  ) {
    const state = getState();

    let matchList = state.match;

    // console.log('INDEX', index);
    const index = matchList.findIndex((findId) => findId.matchId === matchId);
    // console.log('SDSDSDSD', matchList[matchId]);

    setState({
      ...state,
      selectedMatch: matchList[index],
    });
  }
}
