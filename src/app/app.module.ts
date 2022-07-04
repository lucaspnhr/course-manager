import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { StarComponent } from './shared/components/star/star.component';
import { ToCurencyPipe } from './shared/pipes/toCurrencyPipe/toCurency.pipe';

import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/components/error/notFound/notFound.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StarComponent,
    ToCurencyPipe,
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '' , redirectTo:'courses', pathMatch:"full"
      },
      {
        path: 'courses', component: CoursesComponent
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
