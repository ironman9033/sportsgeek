import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContestLogBaseURL } from '../../constants/http-urls';

@Injectable({
  providedIn: 'root'
})
export class ContestLogService {

  constructor(private http: HttpClient) { }

  async getAllContestLogForLastDays(): Promise<any> {
    return await this.http.get(ContestLogBaseURL + '/last-days/' + 10, { observe: 'response' }).toPromise();
  }

  async getAllContestLogAfterId(contestLogId:number): Promise<any> {
    return await this.http.get(ContestLogBaseURL + '/after-id/' + contestLogId, { observe: 'response' }).toPromise();
  }

}
