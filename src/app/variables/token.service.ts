import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private dato: any;

  constructor() { }
  get(){
    return this.dato;
  }
  set(dato:any){
    this.dato=dato;
  }
}
