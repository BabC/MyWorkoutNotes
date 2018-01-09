import {Component} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {Session} from '../../models/session';
import {DataProvider} from '../../providers/data/data';
import {DataType} from '../../models/data-type-enum';
import {ModalAddExercisePage} from '../modal-add-exercise/modal-add-exercise';

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
              private dataService: DataProvider,
              private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.callback = this.navParams.get('callback')
  }

  addExercise() {
    let modal = this.modalCtrl.create(ModalAddExercisePage);
    modal.onDidDismiss((data) => this.newSession.exercises.push(data));
    modal.present();
  }

  validateNewSession() {
    this.callback(this.newSession).then(() => {
      this.navCtrl.pop();
    });
  }
}
