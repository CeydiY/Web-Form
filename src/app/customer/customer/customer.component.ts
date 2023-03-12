import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {InformationForm, InformationService} from "../../information.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
  arrInformation: InformationForm[] =[];

  constructor(private informationService: InformationService) {
  }
  ngOnInit():void{
    this.informationService.getInformation$().subscribe(information =>{
      this.arrInformation = information;
    })
  }
}
