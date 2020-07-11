import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CourseServiceService} from '../services/course-service.service';
import {InstructorsService} from '../services/instructors.service';
import {CategoryService} from '../services/category.service'
import {ContactService} from '../services/contact.service';
 
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';

import { SearchPipe } from './search.pipe';
import { ShortenDescriptionPipe } from './shorten-description.pipe';

import { from } from 'rxjs';

import { NavService } from 'src/services/nav.service';


const appRoutes : Routes = [
      { path:'courses', component:CoursesComponent},
      { path:'', component: HomeComponent},
      { path: 'course_details/:id', component: CourseComponent},
      { path:'contact', component: ContactComponent},
      { path: 'instructors', component: InstructorsComponent},
      { path: 'not-found', component: PageNotFoundComponent },
      { path:'**', redirectTo:'/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NavComponent,
    HomeComponent,
    CourseComponent,
    ContactComponent,
    SearchPipe,
    ShortenDescriptionPipe,
    InstructorsComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CourseServiceService,InstructorsService,ContactService,CategoryService,NavService],
  bootstrap: [AppComponent,NavComponent,FooterComponent,HeaderComponent]
})
export class AppModule { }
