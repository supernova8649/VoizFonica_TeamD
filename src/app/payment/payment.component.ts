import { Component, OnInit } from '@angular/core';
import { PrepaidPlan } from '../prepaid-plan';
import { InteractionService } from '../service/interaction.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 public prepaidpl:PrepaidPlan;

  constructor(private interService:InteractionService) { }

  ngOnInit() {

    this.interService.pSource$.subscribe(plan=>{this.prepaidpl=plan;console.log(plan);});
    
  
  }

}


