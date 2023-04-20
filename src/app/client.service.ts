import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Client } from "./Interfaces/Client";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlLocal = "/dataclient"

  constructor(private http: HttpClient) {
  }

  getClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.urlLocal);
  }

  getClientId(id: string):Observable<any>{
    return this.http.get(this.urlLocal+'/'+id);
  }

  addClient(client : Client):Observable<Client>{
    return this.http.post<Client>(this.urlLocal, client);
  }

  updateClient(client: Client, username: string):Observable<Client>{
    console.log(client.username);
    return this.http.put<Client>(this.urlLocal+'/'+username,client);
  }

  deleteClient(id: string):Observable<any>{
    return this.http.delete(this.urlLocal+'/'+id);
  }
}

