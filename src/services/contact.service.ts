import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  header={
    headers : new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  }

  constructor(private service : HttpClient) { }

  sendEmail(data){
    var send=this.service.post("http://localhost/courses/public/api/contact",data,this.header);
    return send;
  }
}
