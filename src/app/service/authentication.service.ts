import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {FormsModule} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username,password)
  {
    if(username =="a@gmail.com"  && password =="a")
    {
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    }
    return false;

    
  }

  isUserLoggedIn(username,password)
  {
    let usr=sessionStorage.getItem('authenticatedUser');
    return !(usr === null);
    
    
  }
  
  logout()
  {
    sessionStorage.removeItem('authenticatedUser');
    localStorage.removeItem('currentUser');
  }

}
