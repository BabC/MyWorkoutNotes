import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Session} from '../../../models/session';

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

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.session = this.navParams.get('session');
    this.deleteCallback = this.navParams.get('deleteCallback');
  }

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
}
