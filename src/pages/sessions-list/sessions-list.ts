import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Session} from '../../models/session';
import {SessionDetailPage} from '../session-detail/session-detail';

/**
 * Generated class for the SessionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sessions-list',
  templateUrl: 'sessions-list.html',
})
export class SessionsListPage {

  public sessions: Session[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.sessions = [
      {exercises: [{name: 'Squat'}, {name: 'Soulevé'}, {name: 'Squat'}]},
      {exercises: [{name: 'Tirage'}]},
      {exercises: [{name: 'Fente'}, {name: 'Montée sur banc'}]},
      {exercises: [{name: 'Epaules'}, {name: 'Dos'}, {name: 'Bras'}]},
    ]
  }

  viewSession(session) {
    this.navCtrl.push(SessionDetailPage, {
      session: session
    });
  }
}