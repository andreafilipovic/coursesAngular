import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  header={
    headers : new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  }
  constructor(private service : HttpClient) {}

    get_all_categories(){
      var categories=this.service.get("http://localhost/courses/public/api/category",this.header);
      return categories;
    }

  
   
}
