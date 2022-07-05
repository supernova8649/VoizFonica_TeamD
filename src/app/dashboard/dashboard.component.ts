import { Component, OnInit } from '@angular/core';
import{User} from '../user';
import { ApiService } from '../service/api.service';
import{RegisterComponent} from '../register/register.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:User[];
  constructor(private userService:ApiService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(data=>{this.user=data;console.log(data)});
  }
  

}
