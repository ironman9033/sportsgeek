import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rechargeBaseURL } from '../../constants/http-urls';
import { RechargeModel } from '../../model/recharge/recharge-model';

// let rechargeBaseURL = 'http://localhost:8081/recharge';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {

  constructor(private http:HttpClient) { }

  async getAllRecharge(): Promise<any> {
    return await this.http.get(rechargeBaseURL, { observe: 'response' }).toPromise();
  }

  async addRecharge(userModel: RechargeModel): Promise<any> {
    return await this.http.post(rechargeBaseURL, userModel, { observe: 'response' }).toPromise();
  }

  async updateRecharge(rechargeId: number, model: RechargeModel): Promise<any> {
    return await this.http.put(rechargeBaseURL + '/' + rechargeId, model, { observe: 'response' }).toPromise();
  }

  async deleteRecharge(rechargeId: number): Promise<any> {
    return await this.http.delete(rechargeBaseURL + '/' + rechargeId , { observe: 'response' }).toPromise();
  }

}
