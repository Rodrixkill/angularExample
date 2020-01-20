import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MongoDbService {
  public mainUrl:string='http://localhost:3000/';
  private headers: HttpHeaders;

  constructor(private http:HttpClient) {}
  get<T>(to:string,token?:string): Observable<T>{
    if(token){
      return this.http.get<T>(this.mainUrl+to,{headers: new HttpHeaders()
        .set('Content-type','application/json')
        .set('Access-Control-Allow-Headers', 'Origin')
        .set('token',token)
      });
    }else{
      return this.http.get<T>(this.mainUrl+to,{headers: new HttpHeaders()
        .set('Content-type','application/json')
        .set('Access-Control-Allow-Headers', 'Origin')
      });
    }
  }
  post(to:string,toSend:any,token?:string){
    if(token){
      return this.http.post<any>(this.mainUrl+to,toSend,{headers: new HttpHeaders()
        .set('Content-type','application/json')
        .set('token',token)
      });
    }else{
      return this.http.post<any>(this.mainUrl+to,toSend,{observe: 'response',headers: new HttpHeaders()
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
