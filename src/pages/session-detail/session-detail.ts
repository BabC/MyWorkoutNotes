import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Session} from '../../models/session';

/**
 * Generated class for the SessionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-session-detail',
  templateUrl: 'session-detail.html',
})
export class SessionDetailPage {

  public session: Session;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.session = this.navParams.get('session');
  }

}
