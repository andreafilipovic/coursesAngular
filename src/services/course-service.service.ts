import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  header={
    headers : new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  }
 
  constructor(private service : HttpClient) { }

  get_all_course(){

    var c=this.service.get("http://localhost/courses/public/api/courses",this.header);
    return c;
  }

  get_all_courses_from_cat(id){
    
    var x=this.service.get("http://localhost/courses/public/api/courses_category/"+id,this.header);
    return x;
  }

  get_course_details(id){
    var course=this.service.get("http://localhost/courses/public/api/courses/"+id,this.header);
    return course;
  }
}
