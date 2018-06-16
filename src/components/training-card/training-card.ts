import {Component, Input} from '@angular/core';
import {Exercise} from "../../models/exercise";

/**
 * Generated class for the TrainingCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'training-card',
  templateUrl: 'training-card.html'
})
export class TrainingCardComponent {

  @Input()
  exercise: Exercise;

  constructor() {
  }
}
