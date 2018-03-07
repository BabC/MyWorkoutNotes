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
  name: string;
  repetition: number;
  set: number;
  rest: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private dataService: DataProvider) {
  }

  ionViewDidLoad() {

    this.dataService.getData(DataType.EXERCISE).then((exercises) => {
      if (exercises) {
        this.exercises = exercises as Exercise[];
      }
    });
  }

  AddExercise() {

  }

  isValidExercise(): boolean {
    return !!this.name;

  }
}
