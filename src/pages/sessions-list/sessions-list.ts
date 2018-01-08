import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Session} from '../../models/session';
import {SessionDetailPage} from '../session-detail/session-detail';
import {DataProvider} from '../../providers/data/data';
import {DataType} from '../../models/data-type-enum';
import {NewSessionPage} from '../new-session/new-session';

/**
 * Generated class for the SessionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sessions-list',
  templateUrl: 'sessions-list.html',
})
export class SessionsListPage {

  public sessions: Session[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private dataService: DataProvider) {
  }

  ionViewDidLoad() {
    this.sessions = [];

    this.dataService.getData(DataType.SESSION).then((sessions) => {
      if (sessions) {
        this.sessions = sessions;
      }
    });

    // TODO : remove with storage
    /*
    this.sessions = [
      {exercises: [{name: 'Squat'}, {name: 'Soulevé'}, {name: 'Squat'}]},
      {exercises: [{name: 'Tirage'}]},
      {exercises: [{name: 'Fente'}, {name: 'Montée sur banc'}]},
      {exercises: [{name: 'Epaules'}, {name: 'Dos'}, {name: 'Bras'}]},
    ]*/
  }

  viewSession(session) {
    this.navCtrl.push(SessionDetailPage, {
      session: session
    });
  }

  addNewSession() {
    this.navCtrl.push(NewSessionPage, {
      sessions: this.sessions
    });
  }
}
