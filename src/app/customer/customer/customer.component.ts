import {Component, OnInit} from '@angular/core';
import { ClientService} from "../../client.service";
import { Client} from "../../Interfaces/Client";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
  arrInformation: Client[] =[];
  listCustomer: Client[] = [];
  modifyClient: Client | undefined;

  index:number = 99;

  constructor(private clientService: ClientService) {
  }
  ngOnInit():void{
    this.listClients();

  }
  listClients(){
    this.clientService.getClients().subscribe(
      (response)=>{
        this.listCustomer = response;
      },
      (error: HttpErrorResponse) =>{
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
  editClient(client : Client, id: number){
    this.clientService.updateClient(id,client).subscribe(
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
