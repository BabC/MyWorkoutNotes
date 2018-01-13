import {Component} from '@angular/core';
import {AlertController, ModalController, NavController, NavParams} from 'ionic-angular';
import {Session} from '../../models/session';
import {ModalAddExercisePage} from '../modal-add-exercise/modal-add-exercise';
import {ModalAddRestPage} from '../modal-add-rest/modal-add-rest';
import {Exercise} from '../../models/exercise';

/**
 * Generated class for the NewSessionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-session',
  templateUrl: 'new-session.html',
})
export class NewSessionPage {

  public newSession: Session = {exercises: []};
  public callback: any;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.callback = this.navParams.get('callback')
  }

  addExercise() {
    let modal = this.modalCtrl.create(ModalAddExercisePage);
    modal.onDidDismiss((data) => this.newSession.exercises.push(data));
    modal.present();
  }

  addRest() {
    let modal = this.modalCtrl.create(ModalAddRestPage);
    modal.onDidDismiss((data) => {
      const rest: Exercise = {
        name: 'Rest - ' + data
      }
      this.newSession.exercises.push(rest);
    });
    modal.present();
  }

  validateNewSession() {
    this.callback(this.newSession).then(() => {
      this.navCtrl.pop();
    });
  }
}
