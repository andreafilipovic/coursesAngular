import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../../services/course-service.service';
import { CategoryService} from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { error } from 'protractor';
import { trigger, transition,style,animate } from '@angular/animations';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(1500, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class CoursesComponent implements OnInit {
  data;
  courses;
  categories;
  id;
  searchText;
  items : any[]=[];
  constructor(private service : CourseServiceService, private route : ActivatedRoute) { }

 
  ngOnInit() {
    
    this.service.get_all_course().subscribe(
      response=>{this.data=response },
      error=>{this.data=error }
    );
  };

  getCourses(idCat){
    if(idCat=='0'){
      this.service.get_all_course().subscribe(
        response=>{this.data=response},
        error=>{console.log(error)}
      )
    }else{
      this.service.get_all_courses_from_cat(idCat).subscribe(
        response=>{this.data=response},
        error=>{console.log(error)}
      )
    }

  }

}
