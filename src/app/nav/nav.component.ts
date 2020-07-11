import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/services/nav.service';
import { error } from 'protractor';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  links;
  constructor(private service : NavService) { }

  //links : any[];
  ngOnInit() {
    this.service.getNav().subscribe(
      response=>{this.links=response},
      error=>{console.log(error)}
    )
  }

  // this.links = [
  //   {
  //     path:"",
  //     title:"Home"
  //   },
  //   {
  //     path:"/courses",
  //     title:"Courses"
  //   },
   
  //   {
  //     path: "/instructors",
  //     title: "Instructors"
  //   },
  //   {
  //     path:"/contact",
  //     title:"Contact"
  //   },
  // ];
}
