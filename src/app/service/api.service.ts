import { Injectable } from '@angular/core';
import{User} from '../user';

import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

 
  private userUrl1 = 'http://localhost:8080/api/customers' ;
  
 

  public createUser(user) {
    return this.http.post<User>(this.userUrl1, user);
  }

  public getUsers() {
    return this.http.get<User[]>(this.userUrl1);
    }


 
}
