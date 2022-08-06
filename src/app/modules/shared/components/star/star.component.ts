import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() // using this we can pass values from another component to it
  rating:number = 0;

  starWifth:number = 0;

  ngOnChanges(): void {
    this.starWifth = this.rating * 74 / 5; // fontawsome calc to redimention the star from ratings
  }

}
