import { Injectable } from '@angular/core';

import{HttpClient,HttpHeaders} from '@angular/common/http';
import{PrepaidPlan} from '../prepaid-plan';
import{PostpaidPlan} from '../postpaid-plan';
import{DonglePlan} from '../dongle-plan';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  
  constructor(private http:HttpClient) { }
  private userUrl = 'http://localhost:8085/api/prepaidplans';
  private userUrl1 = 'http://localhost:8085/api/postpaidplans';
  private userUrl2 = 'http://localhost:8085/api/dongleplans';


  public getPlans() {
    return this.http.get<PrepaidPlan[]>(this.userUrl);
  }

  public getPostpaidPlans()
  {
    return this.http.get<PostpaidPlan[]>(this.userUrl1);
  }

  public getDonglePlans()
  {
    return this.http.get<DonglePlan[]>(this.userUrl2);
  }
}
