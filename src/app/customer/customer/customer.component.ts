import {Component, OnInit} from '@angular/core';
import { ClientService} from "../../client.service";
import { Client} from "../../Interfaces/Client";
import {HttpErrorResponse} from "@angular/common/http";
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
  listCustomer: Client[] = [];
  modifyClient: Client;
  deleClient: Client;
  closeResult: string;

  constructor(private clientService: ClientService, public modalService: NgbModal) {
  }
  ngOnInit():void{
    this.listClients();

  }
  listClients(){
    this.clientService.getClients().subscribe(
      (response)=>{
        this.listCustomer = response.data;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message)
      }
    )
  }


  open(content, mode: string, client: Client) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    if(mode === 'edit'){
      this.modifyClient = client;
      this.listClients();
    }
    if(mode === 'delete'){
      this.deleClient = client;
      this.listClients();
    }
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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
        this.listClients();
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
