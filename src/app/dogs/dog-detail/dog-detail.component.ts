import { Component, Input } from '@angular/core';
import { Dog } from '../../models/dog.model';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent {
  @Input() dog!: Dog;

  constructor() {}

  getAgeLabel() {
    return this.dog.age > 1 ? `${this.dog.age} years old` : `${this.dog.age} year old`;
  }
}
