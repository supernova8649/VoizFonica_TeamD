import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import{PrepaidPlan} from '../prepaid-plan';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private planSource=new Subject<PrepaidPlan>();

  pSource$=this.planSource.asObservable();

  constructor() { }
  sendPlan(plan:PrepaidPlan)
  {
    console.log(plan);
    this.planSource.next(plan);
  }
}
