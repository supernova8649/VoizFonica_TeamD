import { Component, OnInit } from '@angular/core';
import{PrepaidPlan} from '../prepaid-plan';
import{PlansService} from '../service/plans.service';
import { PostpaidPlan } from '../postpaid-plan';
import{DonglePlan} from '../dongle-plan';
import { InteractionService } from '../service/interaction.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public prepaid : PrepaidPlan[];
  public postpaid:PostpaidPlan[];
  public dongle:DonglePlan[];
  
  constructor( private plan:PlansService,private interService:InteractionService ,private router:Router) { }

  ngOnInit() {

    this.plan.getPlans().subscribe(data =>{this.prepaid=data;console.log(data);});
    this.plan.getPostpaidPlans().subscribe(data=>{this.postpaid=data;console.log(data);})
    this.plan.getDonglePlans().subscribe(data=>{this.dongle=data;console.log(data);})
}

PrepaidPlanMethod(plan:PrepaidPlan){
  this.interService.sendPlan(plan);
  this.router.navigate(['payment']);

}

}


