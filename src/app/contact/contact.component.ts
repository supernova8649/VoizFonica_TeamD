import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Issue } from '../issue';
import {Router} from '@angular/router';
import { HelpService } from '../service/help.service';





@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  // contactForm = new FormGroup({

  //   fullName: new FormControl('dinesh'),
  //   email: new FormControl('din@gmail.com'),
  //   comment: new FormControl('464')
  // });

   issue:Issue=new Issue();

  constructor(private router: Router, private helpService : HelpService ) { }

  ngOnInit() {
  }
  createComplaints(): void {
    this.helpService.createComplaints(this.issue)
        .subscribe( data => {
          alert("Issue Registered Successfully");
        });

  };

}
