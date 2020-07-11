import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  
  header={
    headers : new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  }
  constructor(private service : HttpClient) { }

  getNav(){
    var nav=this.service.get("http://localhost/courses/public/api/nav",this.header);
    return nav;
  }
}
