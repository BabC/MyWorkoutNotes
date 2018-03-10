import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Exercise} from "../../models/exercise";
import {DataType} from "../../models/data-type-enum";
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the AddExercisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-exercise',
  templateUrl: 'add-exercise.html',
})
export class AddExercisePage {

  exercises: Exercise[] = [];
  currentExercise: Exercise;
  name: string;
  repetition: number;
  set: number;
  rest: string;

  callback: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dataService: DataProvider) {
  }

  ionViewDidLoad() {
    this.currentExercise = this.navParams.get('exercise');
    this.callback = this.navParams.get('callback');

    this.dataService.getData(DataType.EXERCISE).then((exercises) => {
      if (exercises) {
        this.exercises = exercises as Exercise[];
      }
    });

    if (this.currentExercise) {
      this.name = this.currentExercise.name;
      this.set = this.currentExercise.set;
      this.repetition = this.currentExercise.repetition;
      this.rest = this.currentExercise.rest;
    }
  }

  AddExercise() {
    const exercise: Exercise = {
      name: this.name,
      repetition: this.repetition,
      set: this.set,
      rest: this.rest
    };
    this.callback(exercise).then(() => {
      this.navCtrl.pop();
    });
  }

  isValidExercise(): boolean {
    return !!this.name;

  }
}
