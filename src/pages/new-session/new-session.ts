import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Session} from '../../models/session';
import {DataProvider} from "../../providers/data/data";
import {DataType} from '../../models/data-type-enum';

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

  public newSession: Session;
  public sessions: Session[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private   dataService: DataProvider) {
  }

  ionViewDidLoad() {
    this.newSession = {exercises: []};
    this.sessions = this.navParams.get('sessions');
  }

  validateNewSession() {
    // TODO : remove
    this.newSession.exercises.push({name: 'Squat' + Math.floor(Math.random() * 6) + 1});


    this.sessions.push(this.newSession as Session);
    this.dataService.saveData(DataType.SESSION, this.sessions);

    this.navCtrl.pop();

  }
}
