import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Exercise} from '../../../models/exercise';
import {DataProvider} from '../../../providers/data/data';
import {DataType} from '../../../models/data-type-enum';
import {StringFormat} from '../../../utils/string-format/string-format';

/**
 * Generated class for the ExercisesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-exercises',
  templateUrl: 'exercises-list.html'
})
export class ExercisesListPage {

  public exercises: Exercise[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private dataService: DataProvider) {
  }

  ionViewDidLoad() {
    this.updateData();
  }

  /**
   * Open a modal and save the new exercise
   */
  addExercise() {
    let alert = this.alertCtrl.create({
      title: 'Add exercise',
      inputs: [
        {
          name: 'name',
          placeholder: 'Exercise'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Add',
          handler: data => {
            data.name = StringFormat.capitalize(data.name);
            this.exercises.push({
              name: data.name
            }as Exercise);
            this.saveData();
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * Refresh the list
   */
  private updateData() {
    this.dataService.getData(DataType.EXERCISE).then((exercises) => {
      if (exercises) {
        this.exercises = exercises as Exercise[];
      }
    });
  }

  /**
   * Sort eh exercises by name
   */
  private sortExercises() {
    this.exercises.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });
  }

  /**
   * Call the data provider to save the list
   */
  private saveData() {
    this.sortExercises();
    this.dataService.saveData(DataType.EXERCISE, this.exercises);
  }

  /**
   * Edit an exercise
   * Call the method to apply the edition in all sessions
   * @param {Exercise} e
   */
  editExercise(e: Exercise) {
    let alert = this.alertCtrl.create({
      title: 'Edit exercise',
      inputs: [
        {
          name: 'name',
          value: e.name
        }
      ],
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Edit',
          handler: data => {
            const index = this.exercises.findIndex((eTmp: Exercise) => eTmp.name === e.name);
            data.name = StringFormat.capitalize(data.name);
            this.exercises[index] = {
              name: data.name
            } as Exercise;
            this.saveData();
            this.dataService.editExerciseFromSessions(e, this.exercises[index]);
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * Delete an exercise
   * Call the method to apply the edition in all sessions
   * @param {Exercise} e
   */
  deleteExercise(e: Exercise) {
    let alert = this.alertCtrl.create({
      title: 'Delete ' + e.name,
      message: 'Do you want to remove this exercise ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            const index = this.exercises.indexOf(e)
            if (index >= 0) {
              this.exercises.splice(index, 1);
              this.saveData();
              this.dataService.removeExerciseFromSessions(e);
            }
          }
        }
      ]
    });
    alert.present();
  }
}
