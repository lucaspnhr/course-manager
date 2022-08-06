import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CourseService } from "../service/course.service";
import { Course } from "../models/course";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInforComponent implements OnInit{

    _course:Course= {
        id: 0,
        name: "",
        imageUrl: "",
        price: 0,
        code: "",
        description: "",
        duration: 0,
        rating: 0,
        releaseDate: new Date()
    };

    constructor(private activatedRoute:ActivatedRoute,
         private courseService:CourseService,
         private router:Router){

    }

    ngOnInit(): void {
        let courseId:number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        let course:Course | null | undefined= this.courseService.getById(courseId);
        if(course){
            this._course = course;
        }else{
            this.router.navigate(['**']);
        }
        
    }

    get course(){
        return this._course;
    }
}