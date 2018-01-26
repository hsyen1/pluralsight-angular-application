import {Component, Input, OnChanges, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

  starWidth: number;

  // Input decorator is used anytime it needs input data from its container
  @Input() rating: number = 4;

  // @Output() allows nested components (this) to communicate with the container/parent component
  @Output() ratingClicked: EventEmitter<string> =
          new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }

  // raises an event and emits to the container (product-list component)
  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
