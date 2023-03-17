import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { matchBaseURL, usersBaseURL } from '../../constants/http-urls';
import { MatchModel } from '../../model/match/match-model';
import { OldMatchesModel } from '../../model/match/oldMatchesModel';
import { UpcomingMatch } from '../../model/match/upcomingMatches';

// let matchBaseURL = 'http://localhost:8081/matches';
// let usersBaseURL = 'http://localhost:8081';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(private http:HttpClient) { }

  async getAllMatches(): Promise<any>
  {
    return await this.http.get(matchBaseURL , { observe:'response' }).toPromise();
  }

  async getAllUpcomingMatches(): Promise<any>
  {
    return await this.http.get(matchBaseURL + '/upcoming', { observe:'response' }).toPromise();
  }

  async getAllOldMatches(): Promise<any>
  {
    return await this.http.get(matchBaseURL + '/old-matches', { observe:'response' }).toPromise();
  }

  async addMatches(matchModel:MatchModel):Promise<any>
  // async addMatches(formData:FormData):Promise<any>
  {
    return await this.http.post(matchBaseURL , matchModel,{observe:'response'}).toPromise();
  }

  async updateMatches(matchId:number, model:MatchModel):Promise<any>
  // async updateMatches(matchId:number, formData:MatchModel):Promise<any>
  {
    return await this.http.put(matchBaseURL + '/' + matchId,model, {observe:'response'}).toPromise();
  }

  async updateMatchResult(matchId:number,resultStatus:number,winnerTeamId:number):Promise<any>
  {
    return await this.http.put(matchBaseURL + '/update-match/' + matchId + '/' +resultStatus + '/' +winnerTeamId, {observe:'response'}).toPromise();
  }

  async deleteMatch(matchId: number): Promise<any> {
    return await this.http.delete(matchBaseURL + '/' + matchId).toPromise();
  }

  async updateMatchWinner(matchId: number, resultStatus: boolean, winnerTeamId:number): Promise<any> {
    return await this.http.put(matchBaseURL + '/update-match/' + matchId + '/' + resultStatus + '/' + winnerTeamId, { observe: 'response' }).toPromise();
  }

  async viewMatchById(matchId:number):Promise<any>
  {
    return await this.http.get(matchBaseURL + '/' + matchId, {observe: 'response'}).toPromise();
  }

  async upcomingMatches(userId:number):Promise<any>
  {
    return await this.http.get(usersBaseURL + '/'  + userId + '/upcoming' , {observe: 'response'}).toPromise();
  }

  async liveMatch(userId:number):Promise<any>
  {
    return await this.http.get(usersBaseURL + '/' + userId + '/live' , {observe: 'response'}).toPromise();
  }

  async allMatchResult(userId:number):Promise<any>
  {
    return await this.http.get(usersBaseURL + '/' + userId + '/result' , {observe: 'response'}).toPromise();
  }

  // NGXS SERVICES

  getAllMatchesNGXS(){
    return this.http.get<MatchModel[]>(matchBaseURL);
  }

  getAllUpcomingMatchesNGXS(){
    return this.http.get<UpcomingMatch[]>(matchBaseURL+ '/upcoming');
  }

  getAllOldMatchesNGXS()
  {
    return this.http.get<MatchModel[]>(matchBaseURL + '/old-matches');
  }
}
