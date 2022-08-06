import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../models/course';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  course:Course= {
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

  image:File | undefined;
  
  constructor(private courseService:CourseService,
     private activeRoute: ActivatedRoute,
      private router:Router ) { }

  ngOnInit(): void {
  }

  onImageUpload(event: any){
    this.image = event.target.files[0];
    if(this.image){
      this.course.imageUrl = this.image.name;
    }
  }

  save():void{
    this.courseService.save(this.course).subscribe(
      {
        next: course =>{
          if(this.image){
            this.courseService.uploadImage(this.image, course.id);
          }
          this.router.navigate(['/coursers']);
        },
        error: err => {
          console.log(err);
        }
      }
    );
    
  }

}
