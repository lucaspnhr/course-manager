import { Component, OnInit } from '@angular/core';
import { Course } from './models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Course[] = [];

  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        id : 1,
        name : 'Angular crash course',
        imageUrl :  '',
        price : 180.00,
        code : "ASF1234",
        duration : 2100,
        rating : 5,
        releaseDate: new Date(Date.now())
      },
      {
        id : 2,
        name : 'Java Masterclass',
        imageUrl :  '',
        price : 500.00,
        code : "JSD44522",
        duration : 5100,
        rating : 3,
        releaseDate: new Date(Date.now())
      },
      {
        id : 3,
        name : 'Javascript for Dumies',
        imageUrl :  '',
        price : 50.00,
        code : "DDS5541",
        duration : 1150,
        rating : 4,
        releaseDate: new Date(Date.now())
      },
    ]
  }

}
