import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { StarComponent } from './shared/components/star/star.component';
import { ToCurencyPipe } from './shared/pipes/toCurrencyPipe/toCurency.pipe';

import { RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './core/components/error/notFound/notFound.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { CourseInforComponent } from './courses/course-info/course-info.component';
import { CourseFormComponent } from './courses/course-form/courses/course-form/course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StarComponent,
    ToCurencyPipe,
    NavBarComponent,
    NotFoundComponent,
    CourseInforComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '' , redirectTo:'courses', pathMatch:"full"
      },
      {
        path: 'courses', component: CoursesComponent
      },
      { 
        path:'course/:id', component: CourseInforComponent
      },
      {
        path: '**', component: NotFoundComponent
      }      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
