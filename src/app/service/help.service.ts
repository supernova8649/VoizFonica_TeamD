import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Issue } from '../issue';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HelpService {

 
  constructor(private http:HttpClient) { }

  private userUrl = 'http://localhost:8085/api/issues';

  public createComplaints(complaint) {
    return this.http.post<Issue>(this.userUrl, complaint);
  }

}
