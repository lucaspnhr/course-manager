import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./models/course";

@Injectable({ // promote this class to be available to dependency injection
    providedIn:"root" // it's going to be provide in the root module
})
export class CourseService{

  private baseUrl:string = "http://localhost:8080/api/v1.0/course";

  constructor(private httpCliente:HttpClient){

  }

    save(course: Course):Observable<Course> {
      return this.httpCliente.post<Course>(`${this.baseUrl}/save`, course);
    }

    uploadImage(imageFile:File, courseId:number){
      const formData = new FormData();
      formData.append('image', imageFile, imageFile.name);
      formData.append('courseId', `${courseId}`);
      this.httpCliente.post(`${this.baseUrl}/image/save`, formData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          console.log(response);
        } else {
          console.log('Image not uploaded due to some error!');
        }
      });
    }

    getById(courseId: number): Course| null | undefined {
        return exists(courseId) ? COURSES.find((course:Course) => course.id === courseId) : null;
    }
    getAll():Observable<Course[]>{
        return this.httpCliente.get<Course[]>(this.baseUrl);
    }

}

function exists(courseId:number):boolean{
  return COURSES.some((course:Course) => course.id === courseId);
}

let COURSES:Course[] = [
    {
      id : 1,
      name : 'Angular crash course',
      imageUrl :  '/assets/images/angular-logo.png',
      price : 180.00,
      code : "ASF1234",
      description: "In this course we will learn all about Angular basics",
      duration : 2100,
      rating : 5,
      releaseDate: new Date(1000*60**2*24*365*51)
    },
    {
      id : 2,
      name : 'Java Masterclass',
      imageUrl :  '/assets/images/java-logo.png',
      price : 500.80,
      code : "JSD44522",
      description: "This course will cover from java basics till the most advanced topics realted to Java programming",
      duration : 5100,
      rating : 3.2,
      releaseDate: new Date()
    },
    {
      id : 3,
      name : 'Javascript for Dumies',
      imageUrl :  '/assets/images/javascript-icon.png',
      price : 50.99,
      code : "DDS5541",
      description:"This is a course for those who want to initiate in programming and choosed javascript for it's first language. We are going to cover all the basics fundamentals and build a simple project at the end.",
      duration : 1150,
      rating : 4.5,
      releaseDate: new Date("02/12/2021")
    },
  ]
