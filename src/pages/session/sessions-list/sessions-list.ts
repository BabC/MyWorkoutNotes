import {Component} from '@angular/core';
import {ActionSheetController, NavController} from 'ionic-angular';
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
              private dataService: DataProvider,
              private actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    this.sessions = [];

    this.dataService.getData(DataType.SESSION).then((sessions) => {
      if (sessions) {
        this.sessions = sessions;
      }
    });
  }

  viewSession(session) {
    this.navCtrl.push(SessionDetailPage, {
      session: session
    });
  }

  addNewSession() {
    this.navCtrl.push(NewSessionPage, {
      callback: this.callbackSaveNewSession
    });
  }

  callbackSaveNewSession = (_params) => {
    return new Promise((resolve, reject) => {
      this.sessions.push(_params as Session);
      this.saveData();
      resolve();
    });
  }

  showMenu(session: Session) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Actions on session',
      buttons: [
        {
          text: 'Details',
          role: 'destructive',
          icon: 'eye',
          handler: () => {
            this.viewSession(session);
          }
        }, {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            const index = this.sessions.indexOf(session)
            if (index >= 0) {
              this.sessions.splice(index, 1);
              this.saveData();
            }
          }
        }
      ]
    });
    actionSheet.present();
  }

  saveData() {
    this.dataService.saveData(DataType.SESSION, this.sessions);
  }
}
