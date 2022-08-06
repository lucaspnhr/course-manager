import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarComponent } from "../shared/components/star/star.component";
import { ToCurencyPipe } from "../shared/pipes/toCurrencyPipe/toCurency.pipe";
import { CourseFormComponent } from "./course-form/course-form.component";
import { CourseInforComponent } from "./course-info/course-info.component";
import { CourseListComponent } from "./course-list/course-list.component";

@NgModule({
    declarations:[
        CourseListComponent,
        StarComponent,
        ToCurencyPipe,
        CourseInforComponent,
        CourseFormComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
              path: 'courses', component: CourseListComponent
            },
            { 
              path:'course/:id', component: CourseInforComponent
            },
            {path:'course/register', component: CourseFormComponent}
        ])
    ]
})
export class CourseModule{

}