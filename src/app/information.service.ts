import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { InformationForm } from "./Interfaces/InformationForm";

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  private information: InformationForm[];
  /*Con el subject comunica que ha pasado.*/
  private information$: Subject<InformationForm[]>;

  private urlLocal = "/clients"



  constructor() {
    this.information = [];
    this.information$ =  new BehaviorSubject<InformationForm[]>([]);
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

