import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { IPhoto } from '../models/iphoto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public mainUrl:string='http://jsonplaceholder.typicode.com/';
  private headers: HttpHeaders;

  constructor(private http:HttpClient) {}
  get<T>(to:string,token?:string): Observable<T>{
    if(token){
      return this.http.get<T>(this.mainUrl+to,{headers: new HttpHeaders()
        .set('Content-type','application/json')
        .set('token',token)
      });
    }else{
      return this.http.get<T>(this.mainUrl+to,{headers: new HttpHeaders()
        .set('Content-type','application/json')
      });
    }
  }
  post<T>(to:string,toSend:T,token?:string): Observable<T>{
    if(token){
      return this.http.post<T>(this.mainUrl+to,toSend,{headers: new HttpHeaders()
        .set('Content-type','application/json')
        .set('token',token)
      });
    }else{
      return this.http.post<T>(this.mainUrl+to,toSend,{headers: new HttpHeaders()
        .set('Content-type','application/json')
      });
    }
  }
  update<T>(to:string,id:string,toUpdate:Object,token?:string): Observable<T>{
    if(token){
      return this.http.put<T>(this.mainUrl+to+id,toUpdate,{headers: new HttpHeaders()
        .set('Content-type','application/json')
        .set('token',token)
      });
    }else{
      return this.http.put<T>(this.mainUrl+to+id,toUpdate,{headers: new HttpHeaders()
        .set('Content-type','application/json')
      });
     }
  }
  delete<T>(to:string,id:string,token?:string): Observable<T>{
    if(token){
      return this.http.delete<T>(this.mainUrl+to+id,{headers: new HttpHeaders()
        .set('Content-type','application/json')
        .set('token',token)
      });
    }else{
      return this.http.delete<T>(this.mainUrl+to+id,{headers: new HttpHeaders()
        .set('Content-type','application/json')

      });
    }
  }
 
   
}
