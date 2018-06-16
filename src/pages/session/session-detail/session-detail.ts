import {Component, ViewChild} from '@angular/core';
import {AlertController, Navbar, NavController, NavParams, reorderArray} from 'ionic-angular';
import {Session} from '../../../models/session';
import {DataProvider} from '../../../providers/data/data';
import {DataType} from '../../../models/data-type-enum';
import {AddExercisePage} from "../../add-exercise/add-exercise";
import {Exercise} from "../../../models/exercise";
import {TrainingPage} from "../../training/training";

/**
 * Generated class for the SessionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-session-detail',
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {

  public session: Session;
  public deleteCallback: any;

  private editExerciseIndex: number;

  @ViewChild(Navbar)
  navBar: Navbar;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private alertCtrl: AlertController,
              private dataService: DataProvider) {
  }

  ionViewDidLoad() {
    this.session = this.navParams.get('session');
    this.deleteCallback = this.navParams.get('deleteCallback');
  }

  /**
   * Event fired when changing session's name
   * @param $event
   */
  onChangeName($event) {
    this.saveSession();
  }

  /**
   * Start the session
   */
  startSession() {
    this.navCtrl.push(TrainingPage, {
      session: this.session,
    });
  }

  /**
   * Remove the entire session
   */
  deleteSession() {
    let alert = this.alertCtrl.create({
      title: 'Delete session',
      message: 'Do you want to delete this session ?',
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
            this.deleteCallback(this.session).then(() => {
              this.navCtrl.pop();
            });
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * Open the page AddExercisePage to add an exercise to the current session
   */
  addExercise() {
    this.navCtrl.push(AddExercisePage, {
      callback: this.callbackSaveNewExercise
    });
  }

  callbackSaveNewExercise = (newExercise: Exercise) => {
    return new Promise((resolve, reject) => {
      this.session.exercises.push(newExercise as Exercise);
      this.saveSession();
      resolve();
    });
  };

  /**
   * Open the page AddExercisePage to edit an exercise
   */
  editExercise(e: Exercise) {
    this.editExerciseIndex = this.session.exercises.indexOf(e);
    this.navCtrl.push(AddExercisePage, {
      exercise: e,
      callback: this.callbackEditExercise
    });
  }

  callbackEditExercise = (editedExercise: Exercise) => {
    return new Promise((resolve, reject) => {
      this.session.exercises[this.editExerciseIndex] = editedExercise;
      this.saveSession();
      resolve();
    });
  };


  /**
   * Remove exercise from session
   * @param {Exercise} e
   */
  deleteExercise(e: Exercise) {
    let alert = this.alertCtrl.create({
      title: 'Remove ' + e.name,
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
            const index = this.session.exercises.indexOf(e);
            if (index >= 0) {
              this.session.exercises.splice(index, 1);
            }
            this.saveSession();
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * Reorder exercise in session
   * @param indexes
   */
  reorderItems(indexes) {
    this.session.exercises = reorderArray(this.session.exercises, indexes);
    this.saveSession();
  }

  /**
   * Save the current session
   */
  private saveSession() {
    this.dataService.getData(DataType.SESSION).then((sessions: Session[]) => {
      if (sessions) {
        const oldSession = sessions.find((s: Session) => s.id === this.session.id);
        if (oldSession) {
          const index = sessions.indexOf(oldSession);
          sessions[index] = this.session;
        } else {
          sessions.push(this.session);
        }
        this.dataService.saveData(DataType.SESSION, sessions);
      }
    });
  }

}
