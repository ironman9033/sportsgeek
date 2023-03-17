

export class GetOldMatch {
    static readonly type = '[OldMatchesModel] Get';
}
export class SetOldSelectedMatch {
    static readonly type = '[OldMatchesModel] Set';
    constructor(public matchId:any){}
}