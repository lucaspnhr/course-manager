import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'course-manager';

  mainUser:User = {
    id :1,
    name : "Lucas",
    email : "lucas@email.com",
    password : "123Pass"
  }  
  
}


interface User {
  id:number;
  name:string;
  email:string;
  password:string;
}

function sum(a:number, b:number) {
  return a + b;
}