import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private user: any;

  constructor() { }
  get(){
    return this.user;
  }
  set(user:any){
    this.user=user;
  }
}
