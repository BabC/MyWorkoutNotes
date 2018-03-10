import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Exercise} from "../../models/exercise";

/**
 * Generated class for the ExerciseCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'exercise-card',
  templateUrl: 'exercise-card.html'
})
export class ExerciseCardComponent {

  @Input()
  exercise: Exercise;

  @Output('callbackDeleteExercise')
  callbackDeleteExercise = new EventEmitter();

  @Output('callbackEditExercise')
  callbackEditExercise = new EventEmitter();

  constructor() {

  }

  emitDeleteExercise() {
    this.callbackDeleteExercise.emit();
  }

  emitEditExercise() {
    this.callbackEditExercise.emit();
  }
}
