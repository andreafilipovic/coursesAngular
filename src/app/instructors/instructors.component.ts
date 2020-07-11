import { Component, OnInit } from '@angular/core';
import { InstructorsService } from '../../services/instructors.service';
import { error } from 'protractor';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {

  instructors;
  title="Our Instructors";

  constructor(private service : InstructorsService) { }

  ngOnInit(){
    this.service.get_all_instructors().subscribe(
      response=>{ this.instructors=response},
      error=>{ console.log(error) }
    )
  }

}
