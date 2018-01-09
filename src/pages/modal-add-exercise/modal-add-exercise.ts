import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {Exercise} from '../../models/exercise';
import {DataType} from '../../models/data-type-enum';
import {DataProvider} from '../../providers/data/data';

/**
 * Generated class for the ModalAddExercisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-add-exercise',
  templateUrl: 'modal-add-exercise.html',
})
export class ModalAddExercisePage {

  public exercises: Exercise[] = [];

  constructor(private viewCtrl: ViewController,
              private dataService: DataProvider) {
    this.dataService.getData(DataType.EXERCISE).then((exercises) => {
      if (exercises) {
        this.exercises = exercises as Exercise[];
      }
    });
  }

  dismiss(exercise: Exercise) {
    console.log(exercise);
    this.viewCtrl.dismiss(exercise);
  }
}
