

export class GetUpcomingMatch {
    static readonly type = '[UpcomingMatch] Get';
}
export class SetUpcomingSelectedMatch {
    static readonly type = '[UpcomingMatch] Set';
    constructor(public matchId:any){}
}