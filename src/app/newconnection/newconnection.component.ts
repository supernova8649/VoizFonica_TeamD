import { Component, OnInit } from '@angular/core';
import{Newconn} from '../newconn';
import {Router} from '@angular/router';
import{NewconnectionService} from '../service/newconnection.service';
import { createConnection } from 'net';



@Component({
  selector: 'app-newconnection',
  templateUrl: './newconnection.component.html',
  styleUrls: ['./newconnection.component.css']
})
export class NewconnectionComponent implements OnInit {

  connection:Newconn=new Newconn();

  constructor(private router: Router, private connectionService : NewconnectionService ) { }

  ngOnInit() {
    
  }
  createNewConnection(): void {
    this.connectionService.createNewConnection(this.connection)
        .subscribe( data => {
          alert("New Connection Request Submitted");
        });

  };


}
