import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {trigger,state,transition,animate,style} from '@angular/animations';
import {ContactService} from '../../services/contact.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[
    trigger("showHide", [
      state('true', style({transform: 'scale(1)'})),
      state('false', style({transform: 'scale(0)'})),
      transition('false<=>true', animate('800ms ease'))
    ])
  ]
})
export class ContactComponent implements OnInit {

  contactForm : FormGroup;
  isMessageDisplayed: boolean = false;
  validName=/^[A-ZŠĐČĆŽ][a-zšđčćž]{1,15}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{1,25})+$/;
  constructor(private service : ContactService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      fullName : new FormControl("", [Validators.required, Validators.pattern(this.validName)]),
      email : new FormControl("", [Validators.required, Validators.email]),
      subject : new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(150)]),
      message : new FormControl("", [Validators.required, Validators.minLength(5)])
  })
}

onFormSubmit(){
  this.sendEmail();
  this.isMessageDisplayed = true;
  this.contactForm.reset();
}

sendEmail(){
  let fullNameObj=this.contactForm.get('fullName').value;
  let emailObj=this.contactForm.get('email').value;
  let subjectObj=this.contactForm.get('subject').value;
  let messageObj=this.contactForm.get('message').value;

  let data={
    fullName:fullNameObj,
    email:emailObj,
    subject:subjectObj,
    message:messageObj
  }


  this.service.sendEmail(data).subscribe(
    response=>{console.log(response)},
    error=>{console.log(error)}
  );

 
}

}
