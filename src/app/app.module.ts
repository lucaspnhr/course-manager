import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './core/components/error/notFound/notFound.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';

import { CourseModule } from './courses/course.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: '' , redirectTo:'courses', pathMatch:"full"
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
