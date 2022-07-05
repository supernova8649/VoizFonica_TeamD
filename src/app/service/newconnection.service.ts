import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Newconn} from '../newconn';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewconnectionService {

  constructor(private http:HttpClient) { }
  private userUrl = 'http://localhost:8085/api/newconnection';

  public createNewConnection(connection) {
    return this.http.post<Newconn>(this.userUrl,connection);
  }


}
