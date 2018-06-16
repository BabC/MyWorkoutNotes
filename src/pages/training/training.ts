import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Session} from "../../models/session";
import {Exercise} from "../../models/exercise";
import {StateExercise} from "../../models/state-exercise-enum";

/**
 * Generated class for the TrainingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-training',
  templateUrl: 'training.html',
})
export class TrainingPage {

  public session: Session;

  public exerciseList: Exercise[] = [];

  public stateExercise: StateExercise;
  public stateExerciseEnum = StateExercise;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.stateExercise = StateExercise.WORK;
    this.session = this.navParams.get('session');
    if (this.session) {
      this.session.exercises.forEach((e: Exercise) => {
        if (!e.set) {
          e.set = 1;
        }
        for (let i = 0; i < e.set; i++) {
          const exerciseTmp = Object.assign({}, e);
          exerciseTmp.set = i + 1;
          // e.set = i + 1;
          this.exerciseList.push(exerciseTmp);
        }
      });
    }
  }

  nextExercise() {
    this.stateExercise = StateExercise.REST;
  }

  endTraining() {
    this.navCtrl.pop();
  }

  hasNextExercise() {
    return this.exerciseList.length > 1;
  }

  endRest() {
    this.stateExercise = StateExercise.WORK;
    this.exerciseList.shift();
  }
}
