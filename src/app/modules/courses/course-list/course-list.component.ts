import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import { Course } from '../models/course';

@Component({
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  _filter:string = "";
  _coursers:Course[] = [];  

  filteredCourses:Course[] = [];

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.retriveAll();
  }

  retriveAll(){
    this.courseService.getAll().subscribe({
      next: courses => {
        this._coursers =  courses;
      },
      error: err =>{
        console.log(err);
      }
    });
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


