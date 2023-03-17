import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { venueBaseURL } from '../../constants/http-urls';
import { VenueModel } from '../../model/venue/venue';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  constructor(
    private http: HttpClient
  ) { }

  async getAllVenue(): Promise<any> {
    return await this.http.get(venueBaseURL, { observe: 'response' }).toPromise();
  }

  async addVenue(formData:FormData): Promise<any> {
    return await this.http.post(venueBaseURL, formData, { observe: 'response' }).toPromise();
  }

  async updateVenue(venueId: number, model:VenueModel): Promise<any> {
    return await this.http.put(venueBaseURL + '/' + venueId, model, { observe: 'response' }).toPromise();
  }

  async deleteVenue(venueId: number): Promise<any> {
    return await this.http.delete(venueBaseURL + '/' + venueId , { observe: 'response' }).toPromise();
  }
}
