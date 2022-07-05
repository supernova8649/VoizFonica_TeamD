import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import{FormGroup,FormsModule} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  username="";
  password="";
  invalidMsg="Invalid credentials";
  invalidLoginFlag=false;

  constructor(private router:Router,private auth:AuthenticationService) { }

  ngOnInit() {
    
  }
   


  login():void{
    
    if(this.auth.authenticate(this.username,this.password))
    {
      this.invalidLoginFlag=false;
      this.router.navigate(['home']);
    }
    else{
      this.invalidLoginFlag=true;
    }
  }
  

}
