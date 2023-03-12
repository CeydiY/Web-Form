import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

export interface InformationForm{
  firstName:string,
  lastName:string,
  name:string,
  age:number,
  address:string,
  inlineRadioOptions:any,
  selectCountries:any,
  birthDate:string,
  username:string,
  email:string,
  password:string
}
@Injectable({
  providedIn: 'root'
})
export class InformationService {

  private information: InformationForm[];
  /*Con el subject comunica que ha pasado.*/
  private information$: Subject<InformationForm[]>;

  constructor() {
    this.information = [];
    this.information$ =  new BehaviorSubject<InformationForm[]>([]);;
  }

  addInformation(iInfo: InformationForm){
    this.information.push(iInfo);
    /*Comunicamos los cambios a los componentes que utilizan el servicio*/
    this.information$.next(this.information);
  }

  /*Observable al que nos podemos suscribir*/
  getInformation$(): Observable<InformationForm[]>{
    return this.information$.asObservable();
  }
}

