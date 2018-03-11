import {Component} from '@angular/core';
import {ActionSheetController, AlertController, NavController, NavParams} from 'ionic-angular';
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
              private actionSheetCtrl: ActionSheetController,
              private dataService: DataProvider) {
  }

  ionViewDidLoad() {
    this.updateData();
  }

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

  private updateData() {
    this.dataService.getData(DataType.EXERCISE).then((exercises) => {
      if (exercises) {
        this.exercises = exercises as Exercise[];
      }
    });
  }

  private sortExercises() {
    this.exercises.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });
  }

  private saveData() {
    this.sortExercises();
    this.dataService.saveData(DataType.EXERCISE, this.exercises);
  }

  showMenu(exercise: Exercise) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Edit the exercise',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            const index = this.exercises.indexOf(exercise)
            if (index >= 0) {
              this.exercises.splice(index, 1);
              this.saveData();
            }
          }
        }
      ]
    });
    actionSheet.present();
  }

  editExercise(e: Exercise) {

  }

  deleteExercise(e: Exercise) {

  }
}
