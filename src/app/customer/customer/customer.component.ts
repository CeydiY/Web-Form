import {Component, OnInit} from '@angular/core';
import { ClientService} from "../../client.service";
import { Client} from "../../Interfaces/Client";
import {HttpErrorResponse} from "@angular/common/http";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
  arrInformation: Client[] =[];
  listCustomer: Client[] = [];
  modifyClient: Client | undefined;
  closeResult: string = '';
  index:number = 99;

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
    const container = (<HTMLFormElement>document.getElementById('main-container'));
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal')

    if(mode === 'edit'){
      this.modifyClient = client;
      button.setAttribute('data-bs-target', '#updateClientModal')
    }
    if(mode === 'delete'){
      button.setAttribute('data-bs-target', '#deleteClientModal')
    }
    console.log("BUTTON",button)
    container.appendChild(button);
    button.click();

    this.modalService.open(container);


  }
  onUpdateClient(client : Client){
    this.clientService.updateClient(client).subscribe(
      (response: Client) => {
        this.listClients();
      }
      ,(error: HttpErrorResponse) =>{
        alert(error.message)
      }
    )
  }

  deleteClient(id: number){
    this.clientService.deleteClient(id).subscribe(
      (response)=>{
        this.ngOnInit();
      },(error: HttpErrorResponse) =>{
      alert(error.message)
      }
    )
  }
  editClient(client : Client){
    this.clientService.updateClient(client).subscribe(
      (response: Client) => {
        console.log(response);
        this.listClients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  filterList(){
    let nickname = (<HTMLInputElement>document.getElementById("searchInput")).value;

    this.index = this.arrInformation.findIndex(customer => customer.username == nickname);
    if(this.index == -1){
      this.listCustomer.pop();
      return;
    }
    else{
      this.listCustomer[0] = this.arrInformation[this.index];
    }
  }
}
