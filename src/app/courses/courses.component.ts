import { Component, OnInit } from '@angular/core';
import { CourseService } from './courses.service';
import { Course } from './models/course';

@Component({
  selector: 'app-course',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  _filter:string = "";
  _coursers:Course[] = [];  

  filteredCourses:Course[] = [];

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this._coursers = this.courseService.getAll();
    this.filteredCourses = this._coursers;
  }

  set filter(query:string){
    this._filter = query;

    this.filteredCourses = this._coursers.filter((course:Course) => course.name.toLowerCase().includes(this._filter.toLowerCase()));
  }

  get filter(){
    return this._filter;
  }

}


