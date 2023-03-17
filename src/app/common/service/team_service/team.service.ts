import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { teamBaseURL } from '../../constants/http-urls';
import { TeamModel } from '../../model/team/team-model';
import { UserModel } from '../../model/user/user-model';

// let teamBaseUrl = 'http://localhost:8081/teams';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http:HttpClient) { }

  async getAllTeams(): Promise<any> {
    return await this.http.get(teamBaseURL  , { observe: 'response' }).toPromise();
  }

  // async addTeam(teamModel: TeamModel): Promise<any> {
    async addTeam(formData:FormData):Promise<any>{
    return await this.http.post(teamBaseURL, formData, { observe: 'response' }).toPromise();
  }

  async updateTeam(teamId: number, model: TeamModel): Promise<any> {
    return await this.http.put(teamBaseURL + '/' + teamId, model, { observe: 'response' }).toPromise();
  }

  async deleteTeam(teamId: number): Promise<any> {
    return await this.http.delete(teamBaseURL + '/' + teamId , { observe: 'response' }).toPromise();
  }
}
