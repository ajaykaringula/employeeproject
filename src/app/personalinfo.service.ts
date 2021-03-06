import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalinfoService {

  constructor(private httpClient:HttpClient) { }
  getallemployees():Observable<any>
  {
    return this.httpClient.get("https://6222413b666291106a21d80b.mockapi.io/employees")
  }
}
