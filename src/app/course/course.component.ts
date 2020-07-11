import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { CourseServiceService } from 'src/services/course-service.service';
import { error } from 'protractor';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course;
  idCourse;
  constructor(private http : HttpClient, private route: ActivatedRoute, private service : CourseServiceService) { 
    this.route.params.subscribe((params : Params)=>{
      this.idCourse=this.route.snapshot.params["id"]
    })
  }

  ngOnInit(){
    this.service.get_course_details(this.idCourse).subscribe(
      response=>{
        console.log(response);
        this.course=response;
      },error=>{
        console.log(error);
      }
    )
  }

}
