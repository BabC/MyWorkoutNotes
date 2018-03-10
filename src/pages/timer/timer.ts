import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {VERSION} from '../../models/appConstant';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class InfoPage {

  readonly version: string = VERSION;

  constructor(public navCtrl: NavController, public navParams: NavParams,) {
  }

  ionViewDidLoad() {
  }

}
