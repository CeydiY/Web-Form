import {Component, OnInit} from '@angular/core';
import { ClientService} from "../../client.service";
import { Client} from "../../Interfaces/Client";
import {HttpErrorResponse} from "@angular/common/http";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
  listCustomer: Client[] = [];
  modifyClient: Client;
  deleClient: Client;

  constructor(private clientService: ClientService, public modalService: NgbModal) {
  }
  ngOnInit():void{
    this.listClients();

  }
  listClients(){
    this.clientService.getClients().subscribe(
      (response: Client[])=>{
        this.listCustomer = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message)
      }
    )
  }

  openModel(client: Client, mode :string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');

    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal')

    if(mode === 'edit'){
      this.modifyClient = client;
      button.setAttribute('data-bs-target', '#updateClientModal')
    }
    if(mode === 'delete'){
      this.deleClient = client;
      button.setAttribute('data-bs-target', '#deleteClientModal')
    }
    container.appendChild(button);
    button.click();

    this.modalService.open(button);
  }

  editClient(client : Client, id: string){
    this.clientService.updateClient(client, id).subscribe(
      (response: Client) => {
        console.log(response);
        this.listClients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  onUpdateClient(client : Client, id: string){
    this.clientService.updateClient(client, id).subscribe(
      (response: Client) => {
        this.listClients();
      }
      ,(error: HttpErrorResponse) =>{
        alert(error.message)
      }
    )
  }
  deleteClient(id: string){
    this.clientService.deleteClient(id).subscribe(
      (response)=>{
        this.ngOnInit();
      },(error: HttpErrorResponse) =>{
        alert(error.message)
      }
    )
  }

  filterList(key: string) {
    const results: Client[] = [];
    for (const client of this.listCustomer) {
      if (client.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || client.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || client.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        results.push(client);
      }
    }
    this.listCustomer = results;
    if (results.length === 0 || !key) {
      this.listClients();
    }

  }
}
