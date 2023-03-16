import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {InformationForm, InformationService} from "../../information.service";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
  arrInformation: InformationForm[] =[];
  listCustomer: InformationForm[] = [];
  index:number = 99;

  constructor(private informationService: InformationService) {
  }
  ngOnInit():void{
    this.informationService.getInformation$().subscribe(information =>{
      this.arrInformation = information;
    })
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
