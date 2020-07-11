import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstructorsService {

  header={
    headers : new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  }

  constructor(private service : HttpClient) { }

  get_all_instructors(){
    var instructors=this.service.get("http://localhost/courses/public/api/instructors",this.header);
    return instructors;
  }
}
