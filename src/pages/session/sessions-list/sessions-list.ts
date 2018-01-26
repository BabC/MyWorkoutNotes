import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Session} from '../../../models/session';
import {SessionDetailPage} from '../session-detail/session-detail';
import {DataProvider} from '../../../providers/data/data';
import {DataType} from '../../../models/data-type-enum';
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

  constructor(private navCtrl: NavController,
              private dataService: DataProvider) {
  }

  ionViewDidLoad() {
    this.sessions = [];

    this.dataService.getData(DataType.SESSION).then((sessions) => {
      if (sessions) {
        this.sessions = sessions;
        this.sessions.forEach((s: Session) => {
          if (!s.id) {
            s.id = this.findHighestIdSession() + 1;
          }
        })
      }
    });
  }

  viewSession(session) {
    this.navCtrl.push(SessionDetailPage, {
      session: session,
      deleteCallback: this.callbackDeleteSession
    });
  }

  addNewSession() {
    this.navCtrl.push(NewSessionPage, {
      callback: this.callbackSaveNewSession
    });
  }

  callbackSaveNewSession = (_params) => {
    return new Promise((resolve, reject) => {
      _params.id = this.findHighestIdSession() + 1;
      this.sessions.push(_params as Session);
      this.saveData();
      resolve();
    });
  };

  callbackDeleteSession = (_params) => {
    return new Promise((resolve, reject) => {
        const index = this.sessions.indexOf(_params as Session);
        if (index >= 0) {
          this.sessions.splice(index, 1);
          this.saveData();
        }
        resolve();
      }
    );
  };

  saveData() {
    this.dataService.saveData(DataType.SESSION, this.sessions);
  }

  findHighestIdSession(): number {
    let maxId = 0;
    this.sessions.forEach((s: Session) => {
      if (s.id) {
        maxId = Math.max(maxId, s.id)
      }
    });
    return maxId;
  }
}
