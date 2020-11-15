import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataEnterService {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders();
  //headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  public getData(){ return this.http.get<serviceResponce>('https://bi.syncfusion.com/northwindservice/api/orders').pipe(

    
  )
             
     
  }
}
