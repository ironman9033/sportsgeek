import { MatchModel } from "src/app/common/model/match/match-model";

// All Matches-----------------------------------------------

export class AddMatch {
    static readonly type = '[MatchModel] Add';
    constructor(public payload: MatchModel){}
}

export class UpdateMatch {
    static readonly type = '[MatchModel] Update';
    constructor(public payload: MatchModel,public id:number){}
}

export class GetMatch {
    static readonly type = '[MatchModel] Get';
}

export class SetSelectedMatch {
    static readonly type = '[MatchModel] Set';
    constructor(public matchId:any){}
}
