import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import{Router, RouterLink} from '@angular/router';
import{ApiService} from '../service/api.service';
import { error } from 'util';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  uniqueCheck:boolean=false;
  constructor(private router: Router, private userService: ApiService) { }

  ngOnInit() {
  }
  createUser(): void {
    this.userService.createUser(this.user)
      .subscribe( data => {
        this.uniqueCheck=true;
        alert(this.user.customerName +" "+ "Registered successfully");
        },error=>{alert("Aadhar number which you have entered already exists:"+" "+this.user.customer_aadhar);
      alert("Please enter correct aadhar number which is unique")}
        );

  };

  

}
